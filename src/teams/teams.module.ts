import { Module } from '@nestjs/common';
import { TeamsService } from './service/teams.service';
import { TeamsController } from './controllers/teams.controller';

@Module({
  providers: [TeamsService],
  controllers: [TeamsController]
})
export class TeamsModule {}
