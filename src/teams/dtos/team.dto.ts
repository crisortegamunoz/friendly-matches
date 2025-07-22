import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, IsUrl, MaxLength, Min } from "class-validator";
import { AgeCategory, CompetitionLevel, GameFormat } from "../enums/team.enums";

export class CreateTeamDTO {

    @ApiProperty()
    @IsString()
    @MaxLength(50)
    name: string;

    @ApiProperty()
    @IsString()
    @MaxLength(15)
    shortName: string;

    @ApiProperty()
    @IsString()
    location: string;

    @ApiProperty({ enum: CompetitionLevel })
    @IsEnum(CompetitionLevel)
    competitionLevel: CompetitionLevel;

    @ApiProperty({ enum: AgeCategory })
    @IsEnum(AgeCategory)
    ageCategory: AgeCategory;

    @ApiProperty({ enum: GameFormat })
    @IsEnum(GameFormat)
    gameFormat: GameFormat;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsUrl()
    logo?: string;

    @ApiProperty()
    @IsString()
    captainId: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Min(0)
    reputation?: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}

export class UpdateTeamDTO extends PartialType(CreateTeamDTO) { 
    
    @ApiPropertyOptional()
    @IsNumber()
    @Min(0)
    matchesPlayed?: number;

    @ApiPropertyOptional()
    @IsNumber()
    @Min(0)
    matchesConfirmed?: number;

    @ApiPropertyOptional()
    @IsNumber()
    @Min(0)
    matchesCompleted?: number;

    @ApiPropertyOptional()
    @IsNumber()
    @Min(0)
    matchesNoShow?: number;

    @ApiPropertyOptional()
    @IsNumber()
    @Min(0)
    wins?: number;

    @ApiPropertyOptional()
    @IsNumber()
    @Min(0)
    losses?: number;

    @ApiPropertyOptional()
    @IsNumber()
    @Min(0)
    draws?: number;
}