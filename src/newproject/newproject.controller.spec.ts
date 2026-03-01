import { Test, TestingModule } from '@nestjs/testing';
import { NewprojectController } from './newproject.controller';

describe('NewprojectController', () => {
  let controller: NewprojectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewprojectController],
    }).compile();

    controller = module.get<NewprojectController>(NewprojectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
