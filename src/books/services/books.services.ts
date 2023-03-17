import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksEntity } from 'src/typeorm/entities';
import { Repository, ILike, LessThanOrEqual, MoreThanOrEqual, Raw } from 'typeorm';
import { AuthorsRequestDto, BooksFiltersDto } from '../dto/books.dto';
@Injectable()
export class BooksService {
    constructor(@InjectRepository(BooksEntity) private booksRepo: Repository<BooksEntity>) { }
    async getBooks(booksPagingDto: BooksFiltersDto) {
        const searchTerm = booksPagingDto.search.trim();
        const books = await this.booksRepo.createQueryBuilder('books').where(`books.title ILIKE '%${searchTerm}%' `)
            .andWhere(`books.rating BETWEEN ${booksPagingDto.minRating} AND ${booksPagingDto.maxRating}`)
            .andWhere(`books.author ILIKE '%${booksPagingDto.author}%'`)
            .limit(booksPagingDto.limit)
            .offset(booksPagingDto.offset).orderBy('id', 'ASC')
            .getMany();
        return books;
    };

    async getAuthors(authorsDto: AuthorsRequestDto) {
        const searchTerm = authorsDto.search.trim();
        const authors = await this.booksRepo.find({ where: { author: ILike(`%${searchTerm}%`) }, take: 20, order: { author: 'ASC' } });
        return authors;
    }
}
