import { Module } from '@nestjs/common';
import { TeamMembershipsController } from './controllers/team-memberships.controller';
import { TeamMembershipsService } from './service/team-memberships.service';

@Module({
  controllers: [TeamMembershipsController],
  providers: [TeamMembershipsService]
})
export class TeamMembershipsModule {}
