import { DataTypes, Model, Optional } from "sequelize";
import { UUIDV4 } from '../../types';
import sequelizeConnection from "../sequelizeConnection";

interface DogAttributes {
  id: UUIDV4;
  name: string;
  breed: string;
  isGoodBoy: boolean;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface DogInput extends Optional<DogAttributes, "id"> {

}
export interface DogOutput extends Required<DogAttributes> {}

class Dog extends Model<DogAttributes, DogInput> implements DogAttributes {
  public id!: string;
  public name!: string;
  public breed!: string;
  public isGoodBoy!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Dog.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isGoodBoy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default Dog;