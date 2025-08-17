import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordsService } from './keywords.service';
import { Keyword } from './keywords.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Keyword])],
    providers: [KeywordsService],
})
export class KeywordsModule {}