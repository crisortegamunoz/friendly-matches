import { PartialType } from "@nestjs/swagger";

export class CreateUserDTO {

}

export class UpdateUserDTO extends PartialType(CreateUserDTO) { }