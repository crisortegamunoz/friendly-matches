import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";
import { Team } from "../../teams/entities/team.entity";
import { User } from "../../users/entities/user.entity";
import { TeamMembershipRole } from "../enums/membership.enum";

@Schema({ timestamps: true })
export class TeamMembership extends Document {

    @Prop({ type: Types.ObjectId, ref: User.name, required: true, unique: true })
    player: string;

    @Prop({ type: Types.ObjectId, ref: Team.name, required: true, unique: true })
    team: string;

    @Prop({ required: true, enum: TeamMembershipRole })
    role: string;

    @Prop({ required: true })
    joinedAt: Date;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: Object })
    stats?: {
        matchesPlayed: number;
        pointsScored: number;
    }
}

export const TeamMembershipSchema = SchemaFactory.createForClass(TeamMembership);


TeamMembershipSchema.index(
    { user: 1, isActive: 1 },
    { unique: true, partialFilterExpression: { isActive: true } }
);