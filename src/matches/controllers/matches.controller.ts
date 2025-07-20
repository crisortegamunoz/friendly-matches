import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Filter } from '../../common/filters/filter.dto';
import { MatchesService } from '../services/matches.service';
import { CreateMatchDTO, UpdateMatchDTO } from '../dtos/match.dto';

@ApiTags('matches')
@Controller('matches')
export class MatchesController {

    constructor(private readonly matchesService: MatchesService) {

    }

    @Get()
    @ApiOperation({ summary: 'Find matches', description: 'Find a matches from the database.' })
    @ApiResponse({ status: 200, description: 'The matches has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    findAll(@Query() params: Filter) {
        return this.matchesService.findAll(params);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a match', description: 'Find a match by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from match'
    })
    @ApiResponse({ status: 200, description: 'The match has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'match not found' })
    findById(@Param('id') id: string) {
        return this.matchesService.findById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new match', description: 'Adds a new match to the database.' })
    @ApiBody({ type: CreateMatchDTO, description: 'Details of the match to be created.' })
    @ApiResponse({ status: 201, description: 'The match has been successfully created.', type: CreateMatchDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    create(@Body() payload: CreateMatchDTO) {
        return this.matchesService.create(payload);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a match', description: 'Update a match by id from the database.' })
    @ApiBody({ type: UpdateMatchDTO, description: 'Details of the match to be updated.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from match'
    })
    @ApiResponse({ status: 200, description: 'The match has been successfully updated.', type: UpdateMatchDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'match not found' })
    update(@Param('id') id: string, @Body() payload: UpdateMatchDTO) {
        return this.matchesService.update(id, payload);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a match', description: 'Delete a match by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from match'
    })
    @ApiResponse({ status: 204, description: 'The match has been successfully deleted.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'match not found' })
    delete(@Param('id') id: string) {
        return this.matchesService.delete(id);
    }

}
