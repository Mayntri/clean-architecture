import { DogService } from "../../../src/data-access/services/DogService";
import { dogDal } from "../../../src/data-access/dal/dog";

const dogId = "44c29b2a-b208-4ff2-b2af-a64389a768ba";

jest.mock("../../../src/data-access/dal/dog", () => ({
    deleteById: jest.fn(),
}));

const mockDate = new Date("10 Oct 2021").toISOString();
const dateSpy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);

describe("Dog Service", () => {
  afterAll(() => {
    dateSpy.mockRestore();
  });

  describe("deleteById", () => {
    it("should accept a payload and call the dog dal with it", async () => {
      await DogService.deleteById(dogId);

      expect(dogDal.deleteById).toBeCalledTimes(1);
      expect(dogDal.deleteById).toHaveBeenCalledWith(dogId);
    });
  });
});
