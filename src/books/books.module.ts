import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksEntity } from 'src/typeorm/entities';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.services';

@Module({
    imports: [TypeOrmModule.forFeature([BooksEntity])],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule { }
