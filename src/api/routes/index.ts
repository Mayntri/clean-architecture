import { Router } from 'express'
import dogsRouter from './dogs'
import appointmentsRouter from './appointments'

const router = Router()

router.use('/dogs', dogsRouter)
router.use('/appointments', appointmentsRouter)

export default router