import { PartialType } from "@nestjs/swagger";

export class CreateTeamDTO {

}

export class UpdateTeamDTO extends PartialType(CreateTeamDTO) { }