import { PartialType } from "@nestjs/swagger";

export class CreateMatchResultDTO {

}

export class UpdateMatchResultDTO extends PartialType(CreateMatchResultDTO) { }