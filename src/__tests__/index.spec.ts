import fs from 'fs-extra';
import { minify } from 'csso';

import sass from 'sass';
import less from 'less';

it('less and sass output should match', async () => {
	const cLess = (
		await less.render(fs.readFileSync('less/regular.less').toString(), {
			paths: ['less'],
			filename: 'regular.less',
		})
	).css;

	const cSass = sass.compile('sass/regular.scss').css;

	expect(minify(cLess).css).toBe(minify(cSass).css);
});
