import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger/dist';
import { AuthorsRequestDto, BooksFiltersDto } from '../dto/';
import { BooksService } from '../services/books.services';

@ApiTags('Books')
@Controller('')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @ApiOperation({ summary: 'get paginated books data ' })
    @Get('/books')
    async getBooks(@Query() paging: BooksFiltersDto) {
        const result = await this.booksService.getBooks(paging);
        return { data: result, statusCode: HttpStatus.OK };
    }

    @ApiOperation({ summary: 'get authors by search term ' })
    @Get('/authors')
    async getAuthors(@Query() authorsDto: AuthorsRequestDto) {
        const books = await this.booksService.getAuthors(authorsDto);
        const authors = [];
        books.map((book) => {
            authors.push(book.author);
        });
        return { data: authors, statusCode: HttpStatus.OK };
    }

}
