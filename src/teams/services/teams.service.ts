import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Filter } from '../../common/filters/filter.dto';
import { CreateTeamDTO, UpdateTeamDTO } from '../dtos/team.dto';
import { Team } from '../entities/team.entity';
import { handleMongoDuplicateKeyError } from 'src/common/exceptions/team-exception';

@Injectable()
export class TeamsService {

    constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {

    }

    findAll(filters: Filter) {
        return this.teamModel.find().exec();
    }

    async findById(id: string) {
        return this.teamModel
            .findById(id)
            .populate('captain')
            .exec();
    }

    async create(data: CreateTeamDTO): Promise<Team> {
        try {
            const createdTeam = new this.teamModel(data);
            return await createdTeam.save();
        } catch (error) {
            handleMongoDuplicateKeyError(error);
        }
    }

    async update(id: string, changes: UpdateTeamDTO) {
        try {
            return await this.teamModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
        } catch (error) {
            handleMongoDuplicateKeyError(error);
        }
    }

    async delete(id: string) {
        const team = await this.findById(id);
        if (!team) {
            throw new NotFoundException(`Team not found`);
        }
        return this.teamModel.findByIdAndDelete(id);
    }

    findMemberships(id: string) {
        return null;
    }

    findMatches(id: string) {
        return null;
    }

    findStatistics(id: string) {
        return null;
    }

}
