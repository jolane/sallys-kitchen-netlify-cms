import { injectGlobal } from 'styled-components'
injectGlobal`
	@font-face {
		font-family: 'GT Walsheim Medium';
		src: url('../fonts/GT-Walsheim-Medium.eot'); /* IE9 Compat Modes */
		src: url('../fonts/GT-Walsheim-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('../fonts/GT-Walsheim-Medium.woff') format('woff'), /* Modern Browsers */
			url('../fonts/GT-Walsheim-Medium.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('../fonts/GT-Walsheim-Medium.svg#da30c6e928b2aaaaff2ef00b42acad02') format('svg'); /* Legacy iOS */

		font-style:   normal;
		font-weight:  400;
	}

	@font-face {
		font-family: 'GT Walsheim Thin';
		src: url('../fonts/GT-Walsheim-Thin.eot'); /* IE9 Compat Modes */
		src: url('../fonts/GT-Walsheim-Thin.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('../fonts/GT-Walsheim-Thin.woff') format('woff'), /* Modern Browsers */
			url('../fonts/GT-Walsheim-Thin.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('../fonts/GT-Walsheim-Thin.svg#7f64a45bc9db3941f7e034eacf598c82') format('svg'); /* Legacy iOS */

		font-style:   normal;
		font-weight:  200;
	}


	@font-face {
		font-family: 'GT Walsheim Bold';
		src: url('../fonts/GT-Walsheim-Bold.eot'); /* IE9 Compat Modes */
		src: url('../fonts/GT-Walsheim-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('../fonts/GT-Walsheim-Bold.woff') format('woff'), /* Modern Browsers */
			url('../fonts/GT-Walsheim-Bold.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('../fonts/GT-Walsheim-Bold.svg#bdf76190e7d3b4d381fd92e43e1b9dc0') format('svg'); /* Legacy iOS */

		font-style:   normal;
		font-weight:  700;
	}
`