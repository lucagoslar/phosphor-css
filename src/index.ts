import fs from 'fs-extra';
import sass from 'sass';
import less from 'less';

// https://lesscss.org/usage/
// https://sass-lang.com/documentation/js-api/

const icons: Array<string> = fs.readdirSync('core/assets/regular');
const weights: Array<string> = fs.readdirSync('core/assets');

// * copy icons
for (let weight of weights) {
	fs.copy('core/assets/' + weight, 'assets/' + weight, { overwrite: true });
}

// * copy license
fs.copy('core/LICENSE', 'assets/LICENSE', { overwrite: true });

// * sass
fs.copySync('src/templates/scss/base.scss', 'sass/base.scss', {
	overwrite: true,
});

// ** multi-weight
fs.copySync('src/templates/scss/index.scss', 'sass/index.scss', {
	overwrite: true,
});

fs.appendFileSync('sass/index.scss', '\n');

// append styles
for (let icon of icons) {
	fs.appendFileSync(
		'sass/index.scss',
		'@include icon(' + icon.split('.')[0] + ');\n'
	);
}

// ** regular weight
fs.copySync('src/templates/scss/single__weight.scss', 'sass/regular.scss', {
	overwrite: true,
});

fs.appendFileSync('sass/regular.scss', '\n');

for (let icon of icons) {
	fs.appendFileSync(
		'sass/regular.scss',
		'@include regularWeightIcon(' + icon.split('.')[0] + ');\n'
	);
}

// ** other weights
for (let weight of weights) {
	if (weight == 'regular') continue;

	fs.copySync(
		'src/templates/scss/single__weight.scss',
		'sass/' + weight + '.scss',
		{
			overwrite: true,
		}
	);

	fs.appendFileSync('sass/' + weight + '.scss', '\n');
	fs.appendFileSync('sass/' + weight + '.scss', '$weight: ' + weight + ';\n\n');

	for (let icon of icons) {
		fs.appendFileSync(
			'sass/' + weight + '.scss',
			'@include icon(' + icon.split('.')[0] + ');\n'
		);
	}
}

// * CSS

// ** multi-weight
fs.writeFileSync('css/index.css', sass.compile('sass/index.scss').css);

// ** other weights
for (let weight of weights) {
	fs.writeFileSync(
		'css/' + weight + '.css',
		sass.compile('sass/' + weight + '.scss').css
	);
}

// * LESS
fs.copySync('src/templates/less/base.less', 'less/base.less', {
	overwrite: true,
});

// ** multi-weight
fs.copySync('src/templates/less/index.less', 'less/index.less', {
	overwrite: true,
});

fs.appendFileSync('less/index.less', '\n');

// ** multi-weight
for (let icon of icons) {
	const iconName = icon.split('.')[0];

	fs.appendFileSync(
		'less/index.less',
		'.ph.' + iconName + ' { .icon(' + iconName + '); }\n'
	);
}

// ** regular weight
fs.copySync('src/templates/less/single__weight.less', 'less/regular.less', {
	overwrite: true,
});

fs.appendFileSync('less/regular.less', '\n');

for (let icon of icons) {
	const iconName = icon.split('.')[0];

	fs.appendFileSync(
		'less/regular.less',
		'.ph { .regularWeightIcon(' + iconName + '); }\n'
	);
}

// ** other weights
for (let weight of weights) {
	if (weight == 'regular') continue;

	fs.copySync(
		'src/templates/less/single__weight.less',
		'less/' + weight + '.less',
		{
			overwrite: true,
		}
	);

	fs.appendFileSync('less/' + weight + '.less', '\n');
	fs.appendFileSync('less/' + weight + '.less', '@weight: ' + weight + ';\n\n');

	for (let icon of icons) {
		const iconName = icon.split('.')[0];

		fs.appendFileSync(
			'less/' + weight + '.less',
			'.ph { .icon(' + iconName + '); }\n'
		);
	}
}
