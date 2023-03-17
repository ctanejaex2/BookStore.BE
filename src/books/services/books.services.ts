import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagingRequest } from 'src/shared/models/paging.model';
import { BooksEntity } from 'src/typeorm/entities';
import { Repository } from 'typeorm';
@Injectable()
export class BooksService {
    constructor(@InjectRepository(BooksEntity) private booksRepo: Repository<BooksEntity>) { }
    async getBooks(paging: PagingRequest) {
        const books = await this.booksRepo.find({ take: paging.limit ?? 20, skip: paging.offset, order: { id: 'ASC' } });
        return books;
    };
};
