import { DataTypes, Model, Optional } from "sequelize";
import { UUIDV4 } from '../../types';
import sequelizeConnection from "../sequelizeConnection";
import { Dog } from '.'

export interface AppointmentAttributes {
  id: UUIDV4;
  DogId: UUIDV4;
  date: Date;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface AppointmentInput extends Optional<AppointmentAttributes, "id"> {}
export interface AppointmentOutput extends Required<AppointmentAttributes> {}

class Appointment extends Model<AppointmentAttributes, AppointmentInput> implements AppointmentAttributes {
  public id!: UUIDV4;
  public DogId!: UUIDV4;
  public date!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Appointment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    DogId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

Dog.hasMany(Appointment)

Appointment.belongsTo(Dog)

export default Appointment;