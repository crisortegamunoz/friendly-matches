import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';


import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { TeamMembershipsModule } from './team-memberships/team-memberships.module';
import { MatchesModule } from './matches/matches.module';
import { MatchResultsModule } from './match-results/match-results.module';
import { ReputationLogsModule } from './reputation-logs/reputation-logs.module';
import { DatabaseModule } from './database/database.module';
import { environments } from './common/config/environments';

import config from './config';

const env = process.env.NODE_ENV ?? '.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[env],
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        MONGO_DB: Joi.string().required(),
        MONGO_PORT: Joi.number().required()
      })
    }),
    HttpModule,
    UsersModule,
    TeamsModule,
    TeamMembershipsModule,
    MatchesModule,
    MatchResultsModule,
    ReputationLogsModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
