import { Router } from 'express'
import dogsRouter from './dogs'

const router = Router()

router.use('/dogs', dogsRouter)

export default router