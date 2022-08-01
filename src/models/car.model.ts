import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './mongoModel';

const carMongooseSchema = new Schema<ICar>({
  doorsQty: Number,
  seatsQty: Number,
});

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel(
    'Car',
    carMongooseSchema,
  )) {
    super(model);
  }
}

export default Car;