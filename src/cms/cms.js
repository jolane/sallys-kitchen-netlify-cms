import CMS from 'netlify-cms'

import { StyleSheetManager } from 'styled-components'
const iframe = document.querySelector('.nc-previewPane-frame')
const iframeHeadElem = iframe.contentDocument.head

import HeaderPreview from './HeaderPreview'
import AboutPreview from './AboutPreview'


() => (
  <StyleSheetManager target={iframeHeadElem}>
    <AboutPreview />
  </StyleSheetManager>
)()


CMS.registerPreviewTemplate('intro', HeaderPreview)
CMS.registerPreviewTemplate('about', AboutPreview)
