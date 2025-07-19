export class TeamMembership {
    id: string;
    userId: string;
    teamId: string;
    role: string;
    joinedAt: string;
    isActive: boolean;
    stats?: string;
}