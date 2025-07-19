import { Injectable } from '@nestjs/common';
import { CreateMatchResultDTO, UpdateMatchResultDTO } from '../dtos/matchResult.entity';
import { Filter } from 'src/common/filters/filter.dto';

@Injectable()
export class MatchResultsService {

    findAll(filters: Filter) {
        return null;
    }

    findById(id: string) {
        return null;
    }

    create(payload: CreateMatchResultDTO) {
        return null;
    }

    update(id: string, payload: UpdateMatchResultDTO) {
        return null;
    }

    delete(id: string) {
        return null;
    }

}
