import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Filter } from '../../common/filters/filter.dto';
import { CreateTeamMembershipDTO, UpdateTeamMembershipDTO } from '../dtos/teamMembership.dto';
import { TeamMembership } from '../entities/teamMembership.entity';



@Injectable()
export class TeamMembershipsService {

    constructor(@InjectModel(TeamMembership.name) private membershipModel: Model<TeamMembership>) {

    }

    findAll(filters: Filter) {
        return this.membershipModel.find().exec();
    }

    async findById(id: string) {
        return this.membershipModel
            .findById(id)
            .populate('player')
            .populate('team')
            .exec();
    }

    async create(data: CreateTeamMembershipDTO) {
        const newMembership = new this.membershipModel(data);
        return await newMembership.save();
    }

    async update(id: string, changes: UpdateTeamMembershipDTO) {
        return await this.membershipModel.findByIdAndUpdate(id, { $set: changes }, { new: true }).exec();
    }

    async delete(id: string) {
        const teamMembership = await this.findById(id);
        if (!teamMembership) {
            throw new NotFoundException(`Team Membership not found`);
        }
        teamMembership.isActive = !teamMembership.isActive;
        return await this.membershipModel.findByIdAndUpdate(id, { $set: teamMembership }, { new: true }).exec();
    }

}
