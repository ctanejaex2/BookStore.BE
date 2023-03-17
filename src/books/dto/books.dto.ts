import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class BooksPagingDto {
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
    search: string;

    @ApiPropertyOptional({ default: 0.0 })
    @IsOptional()
    @IsNumberString()
    minPrice: number;

    @ApiPropertyOptional({ default: 99999.0 })
    @IsOptional()
    @IsNumberString()
    maxPrice: number;
}