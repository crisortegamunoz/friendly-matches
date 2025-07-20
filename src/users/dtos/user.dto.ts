import { PartialType } from "@nestjs/swagger";

export class CreateUserDTO {

}

export class UpdateUserDTO extends PartialType(CreateUserDTO) { }

export class UserDTO {
    userName: string;
    password: string;
}