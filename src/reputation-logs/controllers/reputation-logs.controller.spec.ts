import { Test, TestingModule } from '@nestjs/testing';
import { ReputationLogsController } from './reputation-logs.controller';

describe('ReputationLogsController', () => {
  let controller: ReputationLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReputationLogsController],
    }).compile();

    controller = module.get<ReputationLogsController>(ReputationLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
