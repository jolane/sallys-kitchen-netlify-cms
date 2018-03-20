import React from 'react'
import { StyleSheetManager } from 'styled-components'

import Header from '../sections/Header'

const HeaderPreview = ({ entry, widgetFor }) => {
	const iframe = document.querySelector('.nc-previewPane-frame')
	const iframeHeadElem = iframe.contentDocument.head
	return (
		<StyleSheetManager target={iframeHeadElem}>
			<Header words={entry.getIn(['data', 'is_words'])} />
		</StyleSheetManager>
	)
}

export default HeaderPreview