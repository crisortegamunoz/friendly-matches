import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dtos/user.dto';

@Injectable()
export class AuthService {

    login(payload: UserDTO) {

    }

    logout() {

    }

}
