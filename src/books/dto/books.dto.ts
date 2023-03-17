import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class BooksFiltersDto {
    @ApiPropertyOptional({ default: 10 })
    @IsOptional()
    @IsNumberString()
    limit?: number = 10;

    @ApiPropertyOptional({ default: 0 })
    @IsOptional()
    @IsNumberString()
    offset?: number = 0;

    @IsOptional()
    @ApiPropertyOptional()
    @IsString()
    search?: string = '';

    @ApiPropertyOptional({ default: 1.0 })
    @IsOptional()
    @IsNumberString()
    minRating: number;

    @ApiPropertyOptional({ default: 5.0 })
    @IsOptional()
    @IsNumberString()
    maxRating: number;

    @IsOptional()
    @ApiPropertyOptional()
    @IsString()
    author?: string = '';
}

export class AuthorsRequestDto {
    @IsOptional()
    @ApiPropertyOptional()
    @IsString()
    search?: string = '';
}