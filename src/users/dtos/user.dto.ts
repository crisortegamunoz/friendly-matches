import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'User name' })
    name: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'User middle name' })
    middleName?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'User father lastname' })
    lastname1: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'User mother lastname' })
    lastname2?: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ description: 'The Email of User' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'User password' })
    password: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'User phone' })
    phone?: string;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({ description: 'User birthdate' })
    birthdate: Date;

    @IsString()
    @IsUrl()
    @IsOptional()
    @ApiProperty({ description: 'User profile photo' })
    photo?: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) { }

export class UserDTO {
    userName: string;
    password: string;
}