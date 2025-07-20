import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MatchResultsService } from '../service/match-results.service';
import { CreateMatchResultDTO, UpdateMatchResultDTO } from '../dtos/matchResult.entity';
import { Filter } from '../../common/filters/filter.dto';

@ApiTags('match-results')
@Controller('match-results')
export class MatchResultsController {

    constructor(private readonly matchesService: MatchResultsService) {

    }

    @Get()
    @ApiOperation({ summary: 'Find match-results', description: 'Find a match-results from the database.' })
    @ApiResponse({ status: 200, description: 'The match-results has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    findAll(@Query() params: Filter) {
        return this.matchesService.findAll(params);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a match-result', description: 'Find a match-result by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from match-result'
    })
    @ApiResponse({ status: 200, description: 'The match-result has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'match-result not found' })
    findById(@Param('id') id: string) {
        return this.matchesService.findById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new match-result', description: 'Adds a new match-result to the database.' })
    @ApiBody({ type: CreateMatchResultDTO, description: 'Details of the match-result to be created.' })
    @ApiResponse({ status: 201, description: 'The match-result has been successfully created.', type: CreateMatchResultDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    create(@Body() payload: CreateMatchResultDTO) {
        return this.matchesService.create(payload);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a match-result', description: 'Update a match-result by id from the database.' })
    @ApiBody({ type: UpdateMatchResultDTO, description: 'Details of the match-result to be updated.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from match-result'
    })
    @ApiResponse({ status: 200, description: 'The match-result has been successfully updated.', type: UpdateMatchResultDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'match-result not found' })
    update(@Param('id') id: string, @Body() payload: UpdateMatchResultDTO) {
        return this.matchesService.update(id, payload);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a match-result', description: 'Delete a match-result by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from match-result'
    })
    @ApiResponse({ status: 204, description: 'The match-result has been successfully deleted.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'match-result not found' })
    delete(@Param('id') id: string) {
        return this.matchesService.delete(id);
    }

}
