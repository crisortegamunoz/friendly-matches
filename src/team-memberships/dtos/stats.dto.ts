import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class StatsDTO {

    @ApiProperty()
    @IsNumber()
    @Min(0)
    matchesPlayed: number;

    @IsNumber()
    @ApiProperty()
    @Min(0)
    pointsScored: number;
}