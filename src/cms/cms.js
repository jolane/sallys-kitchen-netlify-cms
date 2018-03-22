import CMS from 'netlify-cms'

import HeaderPreview from './HeaderPreview'
import AboutPreview from './AboutPreview'
import TheKitchenPreview from './TheKitchenPreview'
import WherePreview from './WherePreview'


CMS.registerPreviewStyle('/styles/global.css')
CMS.registerPreviewTemplate('intro', HeaderPreview)
CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('the-kitchen', TheKitchenPreview)
CMS.registerPreviewTemplate('where', WherePreview)
