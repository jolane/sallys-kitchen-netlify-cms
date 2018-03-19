import React from 'react'

import Header from '../sections/Header'

const HeaderPreview = ({ entry, widgetFor }) => (
	<Header words={entry.getIn(['data', 'title'])} />
)

export default HeaderPreview