import { Injectable } from '@nestjs/common';

import { Filter } from '../../common/filters/filter.dto';
import { CreateTeamDTO, UpdateTeamDTO } from '../dtos/team.dto';

@Injectable()
export class TeamsService {

    findAll(filters: Filter) {
        return null;
    }

    findById(id: string) {
        return null;
    }

    create(payload: CreateTeamDTO) {
        return null;
    }

    update(id: string, payload: UpdateTeamDTO) {
        return null;
    }

    delete(id: string) {
        return null;
    }

}
