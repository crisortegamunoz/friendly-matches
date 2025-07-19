import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from '../service/users.service';
import { CreateUserDTO, UpdateUserDTO } from './../dtos/user.dto';
import { Filter } from '../../common/filters/filter.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {

    }

    @Get()
    @ApiOperation({ summary: 'Find users', description: 'Find a users from the database.' })
    @ApiResponse({ status: 200, description: 'The users has been successfully found.'})
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    findAll(@Query() params: Filter) {
        return this.userService.findAll(params);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a user', description: 'Find a user by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from User'
    })
    @ApiResponse({ status: 200, description: 'The user has been successfully found.'})
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'User not found' })
    findById(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new user', description: 'Adds a new user to the database.' })
    @ApiBody({ type: CreateUserDTO, description: 'Details of the user to be created.' })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: CreateUserDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    create(@Body() payload: CreateUserDTO) {
        return this.userService.create(payload);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a user', description: 'Update a user by id from the database.' })
    @ApiBody({ type: UpdateUserDTO, description: 'Details of the user to be updated.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from User'
    })
    @ApiResponse({ status: 200, description: 'The user has been successfully updated.', type: UpdateUserDTO })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'User not found' })
    update(@Param('id') id: string, @Body() payload: UpdateUserDTO) {
        return this.userService.update(id, payload);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a user', description: 'Delete a user by id from the database.' })
    @ApiParam({
        name: 'id',
        required: true,
        type: String,
        description: 'Unique id from User'
    })
    @ApiResponse({ status: 204, description: 'The user has been successfully deleted.'})
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'User not found' })
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }

}
