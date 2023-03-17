import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger/dist';
import { BooksPagingDto } from '../dto/';
import { BooksService } from '../services/books.services';

@ApiTags('Books')
@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @ApiOperation({ summary: 'get paginated books data ' })
    @Get()
    async getBooks(@Query() paging: BooksPagingDto) {
        const result = await this.booksService.getBooks(paging);
        return { data: result, statusCode: HttpStatus.OK };
    }

}
