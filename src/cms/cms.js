import CMS from 'netlify-cms'

import HeaderPreview from './HeaderPreview'
import AboutPreview from './AboutPreview'
import ImagesPreview from './ImagesPreview'
import TheKitchenPreview from './TheKitchenPreview'
import WherePreview from './WherePreview'
import FunctionsPreview from './FunctionsPreview'

CMS.registerPreviewStyle('/styles/global.css')
CMS.registerPreviewTemplate('intro', HeaderPreview)
CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('images', ImagesPreview)
CMS.registerPreviewTemplate('thekitchen', TheKitchenPreview)
CMS.registerPreviewTemplate('functions', FunctionsPreview)
CMS.registerPreviewTemplate('where', WherePreview)
