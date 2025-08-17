import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { EmailAccount } from '../email_accounts/email_accounts.entity';
import { Keyword } from '../keywords/keywords.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true })
    telegram_user_id: string;

    @Column({ type: 'varchar', unique: true, nullable: true })
    whatsapp_user_id: string;

    @Column({ type: 'varchar', default: 'New Mail Alert!' })
    notification_title: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => EmailAccount, (emailAccount) => emailAccount.user)
    email_accounts: EmailAccount[];

    @OneToMany(() => Keyword, (keyword) => keyword.user)
    keywords: Keyword[];
}