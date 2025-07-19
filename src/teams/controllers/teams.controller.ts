import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Filter } from '../../common/filters/filter.dto';
import { CreateTeamDTO, UpdateTeamDTO } from '../dtos/team.dto';
import { TeamsService } from '../service/teams.service';

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
    delete(@Param('id') id: string) {
        return this.teamService.delete(id);
    }

}
