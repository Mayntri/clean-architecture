import { Dog, Appointment } from './models'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const options = {
    alter: isDev || isTest
}

const dbInit = () => {
    Dog.sync(options),
    Appointment.sync(options)
}

export default dbInit 