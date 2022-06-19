import { Dog } from '../../../src/data-access/models'
import { dogDal } from '../../../src/data-access/dal/dog'
import { UUIDV4 } from '../../../src/types'

const dbTeardown = async () => {
    await Dog.sequelize?.query("SET FOREIGN_KEY_CHECKS = 0")
    await Dog.truncate({force: true})
    await Dog.sequelize?.query("SET FOREIGN_KEY_CHECKS = 1")
}

describe('Dog DAL', () => {
    let dogId: UUIDV4
    beforeAll(async () => {
        console.log(process.env.DATABASE_URL)
        await dbTeardown()

        ;({id: dogId} = await Dog.create({
            name: 'Beans',
            breed: 'test',
            isGoodBoy: true,
        }))
    })

    afterAll(async () => {
        await dbTeardown()
    })

    describe('Create method', () => {
        it('should create and return an object of dogs details', async () => {
            const payload = {
                name: 'Pasta',
                breed: 'pasta',
                isGoodBoy: true,
            }
            
            const dog = await dogDal.create(payload)

            expect(dog).not.toBeNull()
        })
    })

    describe('Update method', () => {
        it('should update a specific existing Dog entry', async () => {
            await dogDal.update(dogId, {
                name: 'test'
            })

            const dog = await Dog.findByPk(dogId)

            expect(dog?.name).toEqual('test')
        })
    })
})