import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Filter } from '../../common/filters/filter.dto';
import { TeamMembershipsService } from '../services/team-memberships.service';
import { CreateTeamMembershipDTO, UpdateTeamMembershipDTO } from '../dtos/teamMembership.dto';
@ApiTags('team-memberships')
@Controller('team-memberships')
export class TeamMembershipsController {

    constructor(private readonly teamMembershipsService: TeamMembershipsService) {

    }

    @Get()
    @ApiOperation({ summary: 'Find teamMemberships', description: 'Find a teamMemberships from the database.' })
    @ApiResponse({ status: 200, description: 'The teamMemberships has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    findAll(@Query() params: Filter) {
        return this.teamMembershipsService.findAll(params);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a teamMembership', description: 'Find a teamMembership by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from teamMembership'
    })
    @ApiResponse({ status: 200, description: 'The teamMembership has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'teamMembership not found' })
    findById(@Param('id') id: string) {
        return this.teamMembershipsService.findById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new teamMembership', description: 'Adds a new teamMembership to the database.' })
    @ApiBody({ type: CreateTeamMembershipDTO, description: 'Details of the teamMembership to be created.' })
    @ApiResponse({ status: 201, description: 'The teamMembership has been successfully created.', type: CreateTeamMembershipDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    create(@Body() payload: CreateTeamMembershipDTO) {
        return this.teamMembershipsService.create(payload);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a teamMembership', description: 'Update a teamMembership by id from the database.' })
    @ApiBody({ type: UpdateTeamMembershipDTO, description: 'Details of the teamMembership to be updated.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from teamMembership'
    })
    @ApiResponse({ status: 200, description: 'The teamMembership has been successfully updated.', type: UpdateTeamMembershipDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'teamMembership not found' })
    update(@Param('id') id: string, @Body() payload: UpdateTeamMembershipDTO) {
        return this.teamMembershipsService.update(id, payload);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a teamMembership', description: 'Delete a teamMembership by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from teamMembership'
    })
    @ApiResponse({ status: 204, description: 'The teamMembership has been successfully deleted.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'team not found' })
    delete(@Param('id') id: string) {
        return this.teamMembershipsService.delete(id);
    }

}
