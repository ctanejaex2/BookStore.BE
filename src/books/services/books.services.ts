import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksEntity } from 'src/typeorm/entities';
import { Repository, ILike, LessThanOrEqual, MoreThanOrEqual, Raw } from 'typeorm';
import { BooksPagingDto } from '../dto/books.dto';
@Injectable()
export class BooksService {
    constructor(@InjectRepository(BooksEntity) private booksRepo: Repository<BooksEntity>) { }
    async getBooks(booksPagingDto: BooksPagingDto) {
        const searchTerm = booksPagingDto.search.trim();
        const books = await this.booksRepo.find({
            where: { title: ILike(`%${searchTerm}%`), price: LessThanOrEqual(String(booksPagingDto.minPrice)) },
            take: booksPagingDto.limit,
            skip: booksPagingDto.offset,
            order: { id: 'ASC' }
        });
        return books;
    };
}
