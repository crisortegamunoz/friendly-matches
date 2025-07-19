import { PartialType } from "@nestjs/swagger";

export class CreateMatchResultDTO {

}

export class UpdateMatchDTO extends PartialType(CreateMatchResultDTO) { }