import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MatchResultsService } from '../service/match-results.service';
import { CreateMatchResultDTO, UpdateMatchResultDTO } from '../dtos/matchResult.entity';
import { Filter } from '../../common/filters/filter.dto';

@ApiTags('match-results')
@Controller('match-results')
export class MatchResultsController {
    
    constructor(private readonly matchesService: MatchResultsService) {

    }

    @Get()
    findAll(@Query() params: Filter) {
        return this.matchesService.findAll(params);
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.matchesService.findById(id);
    }

    @Post()
    create(@Body() payload: CreateMatchResultDTO) {
        return this.matchesService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: UpdateMatchResultDTO) {
        return this.matchesService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.matchesService.delete(id);
    }

}
