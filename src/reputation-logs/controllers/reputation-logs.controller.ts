import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { ReputationLogsService } from '../service/reputation-logs.service';
import { Filter } from '../../common/filters/filter.dto';
import { CreateReputationLogDTO, UpdateReputationLogDTO } from '../dtos/reputationLog.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('reputation-logs')
@Controller('reputation-logs')
export class ReputationLogsController {

    constructor(private readonly reputationLogsService: ReputationLogsService) {

    }

    @Get()
    @ApiOperation({ summary: 'Find ReputationLogs', description: 'Find a ReputationLogs from the database.' })
    @ApiResponse({ status: 200, description: 'The ReputationLogs has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    findAll(@Query() params: Filter) {
        return this.reputationLogsService.findAll(params);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a ReputationLog', description: 'Find a ReputationLog by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from ReputationLog'
    })
    @ApiResponse({ status: 200, description: 'The ReputationLog has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'ReputationLog not found' })
    findById(@Param('id') id: string) {
        return this.reputationLogsService.findById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new ReputationLog', description: 'Adds a new ReputationLog to the database.' })
    @ApiBody({ type: CreateReputationLogDTO, description: 'Details of the ReputationLog to be created.' })
    @ApiResponse({ status: 201, description: 'The ReputationLog has been successfully created.', type: CreateReputationLogDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    create(@Body() payload: CreateReputationLogDTO) {
        return this.reputationLogsService.create(payload);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a ReputationLog', description: 'Update a ReputationLog by id from the database.' })
    @ApiBody({ type: UpdateReputationLogDTO, description: 'Details of the ReputationLog to be updated.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from ReputationLog'
    })
    @ApiResponse({ status: 200, description: 'The ReputationLog has been successfully updated.', type: UpdateReputationLogDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'ReputationLog not found' })
    update(@Param('id') id: string, @Body() payload: UpdateReputationLogDTO) {
        return this.reputationLogsService.update(id, payload);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a ReputationLog', description: 'Delete a ReputationLog by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from ReputationLog'
    })
    @ApiResponse({ status: 204, description: 'The ReputationLog has been successfully deleted.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'ReputationLog not found' })
    delete(@Param('id') id: string) {
        return this.reputationLogsService.delete(id);
    }

}
