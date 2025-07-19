import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Filter } from '../../common/filters/filter.dto';
import { MatchesService } from '../service/matches.service';
import { CreateMatchDTO, UpdateMatchDTO } from '../dtos/match.dto';

@ApiTags('matches')
@Controller('matches')
export class MatchesController {

    constructor(private readonly matchesService: MatchesService) {

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
    create(@Body() payload: CreateMatchDTO) {
        return this.matchesService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: UpdateMatchDTO) {
        return this.matchesService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.matchesService.delete(id);
    }

}
