import { ICar } from '../../../interfaces/ICar';

const carMock: ICar = {
  model: 'Kicks',
  year: 2022,
  color: 'red',
  status: true,
  buyValue: 100000,
  doorsQty: 4,
  seatsQty: 5,
};

const carMockWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
  model: 'Kicks',
  year: 2022,
  color: 'red',
  status: true,
  buyValue: 100000,
  doorsQty: 4,
  seatsQty: 5,
};

const carMockForChange: ICar = {
  model: 'Kicks',
  year: 2022,
  color: 'red',
  status: true,
  buyValue: 100000,
  doorsQty: 4,
  seatsQty: 5,
};

const carMockForChangeWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
  model: 'Kicks',
  year: 2022,
  color: 'red',
  status: true,
  buyValue: 100000,
  doorsQty: 4,
  seatsQty: 5,
};

const allCarMock: ICar[] & { _id: string }[] = [
	{
		_id: "62cf1fc6498565d94eba52cd",
    model: 'Kicks',
    year: 2022,
    color: 'red',
    status: true,
    buyValue: 100000,
    doorsQty: 4,
    seatsQty: 5,
	},
	{
		_id: "62cf1fc6498565d94eba52cd",
    model: 'Kicks',
    year: 2022,
    color: 'red',
    status: true,
    buyValue: 100000,
    doorsQty: 4,
    seatsQty: 5,
	}
];

export {
	carMock,
	carMockWithId,
	carMockForChange,
	carMockForChangeWithId,
	allCarMock
};