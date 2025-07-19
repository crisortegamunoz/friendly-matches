import { PartialType } from "@nestjs/swagger";

export class CreateTeamMembershipDTO {

}

export class UpdateTeamMembershipDTO extends PartialType(CreateTeamMembershipDTO) { }