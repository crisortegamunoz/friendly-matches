import { PartialType } from "@nestjs/swagger";

export class CreateReputationLogDTO {

}

export class UpdateReputationLogDTO extends PartialType(CreateReputationLogDTO) { }