import { Module } from '@nestjs/common';
import { ReputationLogsController } from './controllers/reputation-logs.controller';
import { ReputationLogsService } from './service/reputation-logs.service';

@Module({
  controllers: [ReputationLogsController],
  providers: [ReputationLogsService]
})
export class ReputationLogsModule {}
