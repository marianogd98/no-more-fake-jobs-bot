import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/users.entity'

export enum Provider {
    GMAIL = 'GMAIL',
    OUTLOOK = 'OUTLOOK',
}

@Entity()
export class EmailAccount {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(() => User, (user) => user.email_accounts)
    @JoinColumn({ name: 'user_id'})
    user: User;

    @Column({type: 'varchar'})
    email_address: string;

    @Column({type: 'enum', enum: Provider})
    provider: Provider;

    @Column({type: 'text'})
    access_token: string;

    @Column({type: 'text'})
    refresh_token: string;

    @Column({ type: 'boolean', default: true})
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}