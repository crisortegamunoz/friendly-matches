import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { CompetitionLevel, AgeCategory, GameFormat } from '../enums/team.enums';
import { User } from '../../users/entities/user.entity';

@Schema({ timestamps: true })
export class Team extends Document {

    @Prop({ required: true, unique: true, index: true })
    name: string;

    @Prop({ required: true })
    shortName: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true, enum: CompetitionLevel })
    competitionLevel: CompetitionLevel;

    @Prop({ required: true, enum: AgeCategory })
    ageCategory: AgeCategory;

    @Prop({ required: true, enum: GameFormat })
    gameFormat: GameFormat;

    @Prop()
    description?: string;

    @Prop()
    logo?: string;

    @Prop({ required: true, unique: true, type: Types.ObjectId, ref: User.name })
    captainId: Types.ObjectId;

    @Prop({ default: 0 })
    reputation?: number;

    @Prop({ default: 0 })
    matchesPlayed?: number;

    @Prop({ default: 0 })
    matchesConfirmed?: number;

    @Prop({ default: 0 })
    matchesCompleted: number;

    @Prop({ default: 0 })
    matchesNoShow?: number;

    @Prop({ default: 0 })
    wins?: number;

    @Prop({ default: 0 })
    losses?: number;

    @Prop({ default: 0 })
    draws?: number;

    @Prop({ default: true })
    isActive: boolean;
}

export const TeamSchema = SchemaFactory.createForClass(Team);