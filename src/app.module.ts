import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { TeamMembershipsModule } from './team-memberships/team-memberships.module';
import { MatchesModule } from './matches/matches.module';
import { MatchResultsModule } from './match-results/match-results.module';
import { ReputationLogsModule } from './reputation-logs/reputation-logs.module';

@Module({
  imports: [UsersModule, TeamsModule, TeamMembershipsModule, MatchesModule, MatchResultsModule, ReputationLogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
