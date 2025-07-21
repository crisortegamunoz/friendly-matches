import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Filter } from '../../common/filters/filter.dto';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {

    }

    findAll(params: Filter) {
        return this.userModel.find().exec();
    }

    async findById(id: string) {
        return this.userModel.findById(id);
    }

    create(data: CreateUserDTO) {
        const newModel = new this.userModel(data);
        return newModel.save();
    }

    update(id: string, changes: UpdateUserDTO) {
        return this.userModel.findByIdAndUpdate(id, { $set: changes }, {new: true}).exec();
    }

    async delete(id: string) {
        const user = await this.findById(id);
        if(!user){
            throw new NotFoundException(`User not found`);
        }
        return this.userModel.findByIdAndDelete(id);
    }

    findUserMemberships(id: string) {
        return null;
    }

    findUserMatches(id: string) {
        return null;
    }

    findUserReputation(id: string) {
        return null;
    }
}
