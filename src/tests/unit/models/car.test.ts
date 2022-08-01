import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/car.model';
import { Model } from 'mongoose';
import { carMock, carMockWithId} from '../mocks/car.test';

describe('Car Model', () => {
	const carModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
	});

  after(() => {
		sinon.restore();
	});

	describe('Creat Car', () => {
		it('Success', async () => {
			const carFrame = await carModel.create(carMock);
			expect(carFrame).to.be.deep.equal(carMockWithId);
		});
	});

	describe('Found ID Car', () => {
		it('Success', async () => {
			const carFound = await carModel.readOne('4edd40c86762e0fb12000003');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});
	});

  describe('Found List Car', () => {
		it('Success', async () => {
			const carFound = await carModel.read();
			expect(carFound).to.be.deep.equal([carMockWithId]);
		});
	});
});