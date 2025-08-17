import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailAccountsService } from './email_accounts.service';
import { EmailAccount } from './email_accounts.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EmailAccount])],
    providers: [EmailAccountsService],
})
export class EmailAccountsModule {}