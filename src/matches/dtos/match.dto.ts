import { PartialType } from "@nestjs/swagger";

export class CreateMatchDTO {

}

export class UpdateMatchDTO extends PartialType(CreateMatchDTO) { }