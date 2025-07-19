import { Injectable } from '@nestjs/common';
import { Filter } from '../../common/filters/filter.dto';
import { CreateMatchDTO, UpdateMatchDTO } from '../dtos/match.dto';

@Injectable()
export class MatchesService {

    findAll(filters: Filter) {
        return null;
    }

    findById(id: string) {
        return null;
    }

    create(payload: CreateMatchDTO) {
        return null;
    }

    update(id: string, payload: UpdateMatchDTO) {
        return null;
    }

    delete(id: string) {
        return null;
    }

}
