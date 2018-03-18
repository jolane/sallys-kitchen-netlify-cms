export function box(width, height) {
	return `
		position: relative;

		&:before {
			content: '';
			display: block;
			padding-bottom: ${(height / width) * 100}%;
		}

		& > *:first-child {
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
		}
	`
}