import { Router } from 'express'
import maxkbAiRouter from './maxkb-ai'
import searchQuoteRouter from './search-quote'
import fishAnimationRouter from './fish-animation'
import markdownEditorRouter from './markdown-editor'
import tocNavRouter from './toc-nav'

const router = Router()

router.use('/maxkb-ai', maxkbAiRouter)
router.use('/search-quote', searchQuoteRouter)
router.use('/fish-animation', fishAnimationRouter)
router.use('/markdown-editor', markdownEditorRouter)
router.use('/toc-nav', tocNavRouter)

export default router 