import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { PagingRequest } from 'src/shared/models';
import { BooksService } from '../services/books.services';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Get()
    async getBooks(@Query() paging: PagingRequest) {
        const result = await this.booksService.getBooks(paging);
        return { data: result, statusCode: HttpStatus.OK };
    }
}
