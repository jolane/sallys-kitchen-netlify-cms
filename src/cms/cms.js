import CMS from 'netlify-cms'

import HeaderPreview from './HeaderPreview'
import ContentPreview from './ContentPreview'

CMS.registerPreviewStyle('/styles/global.css')
CMS.registerPreviewTemplate('intro', HeaderPreview)
CMS.registerPreviewTemplate('content', ContentPreview)
