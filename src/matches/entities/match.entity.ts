export class Match {
    id: string;
    homeTeamId: string;
    awayTeamId: string;
    status: Enumerator;
    sport: Enumerator;
    location: string;
    scheduledAt: Date;
    duration: number;
    rules?: string;
    createdAt: Date;
    updatedAt: Date;
}