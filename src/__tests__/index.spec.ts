import fs from 'fs-extra';
import { minify } from 'csso';

import sass from 'sass';
import less from 'less';

async function compileLess(weight: string): Promise<string> {
	return (
		await less.render(fs.readFileSync('less/' + weight + '.less').toString(), {
			paths: ['less'],
			filename: weight + '.less',
		})
	).css;
}

describe('compare less and sass output', () => {
	it('thin', async () => {
		const cLess = await compileLess('thin');
		const cSass = sass.compile('sass/thin.scss').css;

		expect(minify(cLess).css).toEqual(minify(cSass).css);
	});

	it('light', async () => {
		const cLess = await compileLess('light');
		const cSass = sass.compile('sass/light.scss').css;

		expect(minify(cLess).css).toEqual(minify(cSass).css);
	});

	it('regular', async () => {
		const cLess = await compileLess('regular');
		const cSass = sass.compile('sass/regular.scss').css;

		expect(minify(cLess).css).toEqual(minify(cSass).css);
	});

	it('bold', async () => {
		const cLess = await compileLess('bold');
		const cSass = sass.compile('sass/bold.scss').css;

		expect(minify(cLess).css).toEqual(minify(cSass).css);
	});

	it('fill', async () => {
		const cLess = await compileLess('fill');
		const cSass = sass.compile('sass/fill.scss').css;

		expect(minify(cLess).css).toEqual(minify(cSass).css);
	});

	it('duotone', async () => {
		const cLess = await compileLess('duotone');
		const cSass = sass.compile('sass/duotone.scss').css;

		expect(minify(cLess).css).toEqual(minify(cSass).css);
	});

	it('index', async () => {
		const cLess = await compileLess('index');
		const cSass = sass.compile('sass/index.scss').css;

		expect(minify(cLess).css).toEqual(minify(cSass).css);
	});
});
