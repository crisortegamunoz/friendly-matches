import { Test, TestingModule } from '@nestjs/testing';
import { ReputationLogsService } from './reputation-logs.service';

describe('ReputationLogsService', () => {
  let service: ReputationLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReputationLogsService],
    }).compile();

    service = module.get<ReputationLogsService>(ReputationLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
