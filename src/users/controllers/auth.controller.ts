import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { UserDTO } from '../dtos/user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {

    }

    @Post()
    @ApiOperation({ summary: 'User login', description: 'Allows an existing user to access the application.' })
    @ApiBody({ type: UserDTO, description: 'Details of the user to be validated and allowed access.' })
    @ApiResponse({ status: 200, description: 'The user has been successfully allows.', type: String })
    @ApiResponse({ status: 401, description: 'Invalid credentials. The username or password provided is incorrect.' })
    login(@Body() payload: UserDTO) {
        return this.authService.login(payload);
    }

    @Post()
    @ApiOperation({ summary: 'User logout', description: 'Logs out the current user and disconnects them from the application.' })
    @ApiResponse({ status: 204, description: 'Successfully logged out. The user has closed their session.' })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    logout() {
        return this.authService.logout();
    }

}
