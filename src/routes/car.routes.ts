import { Router } from 'express';
import CarController from '../controllers/car.controller';
import CarModel from '../models/car.model';
import CarService from '../services/car.services';

const route = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

route.post(
  '/cars',
  (req, res) => carController
    .create(req, res),
);
route.get(
  '/cars',
  (req, res) => carController.read(req, res),
);

export default route;