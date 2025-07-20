import { Module } from '@nestjs/common';
import { MatchResultsService } from './services/match-results.service';
import { MatchResultsController } from './controllers/match-results.controller';

@Module({
  providers: [MatchResultsService],
  controllers: [MatchResultsController]
})
export class MatchResultsModule {}
