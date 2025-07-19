export class Team {
    id: string;
    name: string;
    location: string;
    competitionLevel: Enumerator;
    ageCategory: Enumerator;
    gameFormat: Enumerator;
    description?: string;
    logo?: string;
    captainId: string;
    reputation: number;
    matchesPlayed: number;
    matchesConfirmed: number;
    matchesCompleted: number;
    matchesNoShow: number;
    wins: number;
    losses: number;
    draws: number;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}