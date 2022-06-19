import { request } from '../../helpers';
import { UUIDV4 } from '../../../src/types';
import Dog, { DogOutput } from "../../../src/data-access/models/Dog"

const dbTeardown = async () => {
    await Dog.sequelize?.query("SET FOREIGN_KEY_CHECKS = 0")
    await Dog.destroy({ cascade: true, truncate: true, force: true });
    await Dog.sequelize?.query("SET FOREIGN_KEY_CHECKS = 1")
}

describe('Dog routes', () => {
    let dogId: UUIDV4
    let dog: DogOutput

    beforeAll(async () => {
        [dog] = await Promise.all([
            Dog.create({name: 'asdasd', breed: 'test', isGoodBoy: true }),
            Dog.create({name: '213aadd', breed: 'test', isGoodBoy: true}),
        ])

        ;({id: dogId} = dog)
    })

    afterAll(async () => {
        await dbTeardown()
    })

    describe('Get All', () => {
        it('should return an array of existing dogs', async () => {
            const {body: data} = await request.get('/dogs').expect(200)

            expect(data?.length).toEqual(2)
        })
    })

    describe('Get single dog', () => {
        it('should return a single dog with specified id', async () => {
            const {body: data} = await request.get(`/dogs/${dogId}`).expect(200)
                
            expect(data.id).toEqual(dogId)
            expect(data.name).toEqual(dog.name)
        })
    })
})