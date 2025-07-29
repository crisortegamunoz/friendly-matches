import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TeamMembershipsController } from './controllers/team-memberships.controller';
import { TeamMembershipsService } from './services/team-memberships.service';
import { TeamMembership, TeamMembershipSchema } from './entities/teamMembership.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: TeamMembership.name,
          schema: TeamMembershipSchema,
        }
      ])
    ],
  controllers: [TeamMembershipsController],
  providers: [TeamMembershipsService]
})
export class TeamMembershipsModule {}
