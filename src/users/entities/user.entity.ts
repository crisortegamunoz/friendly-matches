export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone?: string;
    birthdate: Date;
    photo?: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}