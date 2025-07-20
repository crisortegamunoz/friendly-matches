import { Injectable } from '@nestjs/common';

import { Filter } from '../../common/filters/filter.dto';
import { CreateUserDTO } from '../dtos/user.dto';


@Injectable()
export class UsersService {

    findAll(params: Filter) {
        return null;
    }

    findById(id: string) {
        return null;
    }

    create(payload: CreateUserDTO) {
        return null;
    }

    update(id: string, payload: CreateUserDTO) {
        return null;
    }

    delete(id: string) {
        return null;
    }
}
