import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsMongoId, IsOptional, IsString, ValidateNested } from "class-validator";
import { StatsDTO } from "./stats.dto";
import { TeamMembershipRole } from "../enums/membership.enum";

export class CreateTeamMembershipDTO {

    @ApiProperty()
    @IsMongoId()
    player: string;

    @ApiProperty()
    @IsMongoId()
    team: string;

    @ApiProperty({ enum: TeamMembershipRole })
    @IsString()
    role: string;

    @ApiProperty()
    @IsDate()
    joinedAt: Date;

    @ApiPropertyOptional()
    @IsBoolean()
    @IsOptional()
    isActive: boolean;

    @ApiProperty({ required: false, type: StatsDTO })
    @IsOptional()
    @ValidateNested()
    @Type(() => StatsDTO)
    stats?: StatsDTO;

}

export class UpdateTeamMembershipDTO extends PartialType(CreateTeamMembershipDTO) {

    @ApiPropertyOptional()
    @IsOptional()
    @ValidateNested()
    @Type(() => StatsDTO)
    stats?: StatsDTO;
}