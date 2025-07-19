import { Injectable } from '@nestjs/common';

import { Filter } from '../../common/filters/filter.dto';
import { CreateTeamMembershipDTO, UpdateTeamMembershipDTO } from '../dtos/teamMembership.dto';

@Injectable()
export class TeamMembershipsService {

    findAll(filters: Filter) {
        return null;
    }

    findById(id: string) {
        return null;
    }

    create(payload: CreateTeamMembershipDTO) {
        return null;
    }

    update(id: string, payload: UpdateTeamMembershipDTO) {
        return null;
    }

    delete(id: string) {
        return null;
    }

}
