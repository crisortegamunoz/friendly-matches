import { Injectable } from '@nestjs/common';
import { Filter } from '../../common/filters/filter.dto';
import { CreateReputationLogDTO, UpdateReputationLogDTO } from '../dtos/reputationLog.dto';

@Injectable()
export class ReputationLogsService {

    findAll(filters: Filter) {
        return null;
    }

    findById(id: string) {
        return null;
    }

    create(payload: CreateReputationLogDTO) {
        return null;
    }

    update(id: string, payload: UpdateReputationLogDTO) {
        return null;
    }

    delete(id: string) {
        return null;
    }


}
