import CMS from 'netlify-cms'

import HeaderPreview from './HeaderPreview'
import AboutPreview from './AboutPreview'

CMS.registerPreviewTemplate('intro', HeaderPreview)
CMS.registerPreviewTemplate('about', AboutPreview)
