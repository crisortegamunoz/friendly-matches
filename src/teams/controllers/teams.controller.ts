import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Filter } from '../../common/filters/filter.dto';
import { CreateTeamDTO, UpdateTeamDTO } from '../dtos/team.dto';
import { TeamsService } from '../services/teams.service';
import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {

    constructor(private readonly teamService: TeamsService) {

    }

    @Get()
    @ApiOperation({ summary: 'Find teams', description: 'Find a teams from the database.' })
    @ApiResponse({ status: 200, description: 'The teams has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    findAll(@Query() params: Filter) {
        return this.teamService.findAll(params);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a team', description: 'Find a team by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from team'
    })
    @ApiResponse({ status: 200, description: 'The team has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'team not found' })
    findById(@Param('id') id: string) {
        return this.teamService.findById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new team', description: 'Adds a new team to the database.' })
    @ApiBody({ type: CreateTeamDTO, description: 'Details of the team to be created.' })
    @ApiResponse({ status: 201, description: 'The team has been successfully created.', type: CreateTeamDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    create(@Body() payload: CreateTeamDTO) {
        return this.teamService.create(payload);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a team', description: 'Update a team by id from the database.' })
    @ApiBody({ type: UpdateTeamDTO, description: 'Details of the team to be updated.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from team'
    })
    @ApiResponse({ status: 200, description: 'The team has been successfully updated.', type: UpdateTeamDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'team not found' })
    update(@Param('id') id: string, @Body() payload: UpdateTeamDTO) {
        return this.teamService.update(id, payload);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a team', description: 'Delete a team by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from team'
    })
    @ApiResponse({ status: 204, description: 'The team has been successfully deleted.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'team not found' })
    @HttpCode(204)
    delete(@Param('id', MongoIdPipe) id: string) {
        return this.teamService.delete(id);
    }

    @Get(':id/memberships')
    @ApiOperation({ summary: 'Get team memberships', description: 'Retrieves a list of all current and historical memberships for a specific team, including roles and participation periods.' })
    @ApiParam({ name: 'id', description: 'The unique identifier of the team', type: 'string' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved list of team memberships.' })
    @ApiResponse({ status: 401, description: 'Unauthorized. Authentication token is missing or invalid.' })
    @ApiResponse({ status: 403, description: 'Forbidden. User does not have necessary permissions to access this team\'s memberships.' })
    @ApiResponse({ status: 404, description: 'Team not found. No team exists with the provided ID.' })
    findMemberships(@Param('id') id: string) {
        return this.teamService.findMemberships(id);
    }

    @Get(':id/matches')
    @ApiOperation({ summary: 'Get team matches', description: 'Retrieves a list of all matches in which the team has participated, including opponents, results, and dates.' })
    @ApiParam({ name: 'id', description: 'The unique identifier of the team', type: 'string' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved list of team\'s matches.' })
    @ApiResponse({ status: 401, description: 'Unauthorized. Authentication token is missing or invalid.' })
    @ApiResponse({ status: 403, description: 'Forbidden. User does not have necessary permissions to access this team\'s matches.' })
    @ApiResponse({ status: 404, description: 'Team not found. No team exists with the provided ID.' })
    findMatches(@Param('id') id: string) {
        return this.teamService.findMatches(id);
    }

    @Get(':id/statistics')
    @ApiOperation({ summary: 'Get team statistics', description: 'Retrieves general statistics for a specific team, such as matches played, won, lost, goals scored, etc.' })
    @ApiParam({ name: 'id', description: 'The unique identifier of the team', type: 'string' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved team statistics.' })
    @ApiResponse({ status: 401, description: 'Unauthorized. Authentication token is missing or invalid.' })
    @ApiResponse({ status: 403, description: 'Forbidden. User does not have necessary permissions to access this team\'s statistics.' })
    @ApiResponse({ status: 404, description: 'Team not found. No team exists with the provided ID.' })
    findStatistics(@Param('id') id: string) {
        return this.teamService.findById(id);
    }

}
