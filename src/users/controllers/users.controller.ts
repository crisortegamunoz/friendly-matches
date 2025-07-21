import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from '../services/users.service';
import { CreateUserDTO, UpdateUserDTO } from './../dtos/user.dto';
import { Filter } from '../../common/filters/filter.dto';
import { MongoIdPipe } from '../../common/pipes/mongo-id.pipe';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {

    }

    @Get()
    @ApiOperation({ summary: 'Find users', description: 'Find a users from the database.' })
    @ApiResponse({ status: 200, description: 'The users has been successfully found.' })
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
    @ApiResponse({ status: 200, description: 'The user has been successfully found.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'User not found' })
    findById(@Param('id', MongoIdPipe) id: string) {
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
    update(@Param('id', MongoIdPipe) id: string, @Body() payload: UpdateUserDTO) {
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
    @ApiResponse({ status: 204, description: 'The user has been successfully deleted.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @ApiResponse({ status: 404, description: 'User not found' })
    delete(@Param('id', MongoIdPipe) id: string) {
        return this.userService.delete(id);
    }

    @Get(':id/memberships')
    @ApiOperation({ summary: 'Get user memberships', description: 'Retrieves a list of all active and historical team memberships for a specific user.' })
    @ApiParam({ name: 'id', description: 'The unique identifier of the user', type: 'string' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved list of user memberships.' })
    @ApiResponse({ status: 401, description: 'Unauthorized. Authentication token is missing or invalid.' })
    @ApiResponse({ status: 403, description: 'Forbidden. User does not have necessary permissions to access this user\'s memberships.' })
    @ApiResponse({ status: 404, description: 'User not found. No user exists with the provided ID.' })
    findUserMemberships(@Param('id') id: string) {
        return this.userService.findUserMemberships(id);
    }

    @Get(':id/matches')
    @ApiOperation({ summary: 'Get user matches', description: 'Retrieves a list of all matches in which the user has participated.' })
    @ApiParam({ name: 'id', description: 'The unique identifier of the user', type: 'string' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved list of user\'s matches.' })
    @ApiResponse({ status: 401, description: 'Unauthorized. Authentication token is missing or invalid.' })
    @ApiResponse({ status: 403, description: 'Forbidden. User does not have necessary permissions to access this user\'s matches.' })
    @ApiResponse({ status: 404, description: 'User not found. No user exists with the provided ID.' })
    findUserMatches(@Param('id') id: string) {
        return this.userService.findUserMatches(id);
    }

    @Get(':id/reputation/logs')
    @ApiOperation({ summary: 'Get user reputation logs', description: 'Retrieves the history of reputation changes (gains/losses) for a specific user.' })
    @ApiParam({ name: 'id', description: 'The unique identifier of the user', type: 'string' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved user\'s reputation logs.' })
    @ApiResponse({ status: 401, description: 'Unauthorized. Authentication token is missing or invalid.' })
    @ApiResponse({ status: 403, description: 'Forbidden. User does not have necessary permissions to access this user\'s reputation logs.' })
    @ApiResponse({ status: 404, description: 'User not found. No user exists with the provided ID.' })
    findUserReputation(@Param('id') id: string) {
        return this.userService.findUserReputation(id);
    }

}
