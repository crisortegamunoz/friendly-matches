import { Test, TestingModule } from '@nestjs/testing';
import { MatchResultsController } from './match-results.controller';

describe('MatchResultsController', () => {
  let controller: MatchResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchResultsController],
    }).compile();

    controller = module.get<MatchResultsController>(MatchResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
