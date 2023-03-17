import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString } from "class-validator";

export class PagingRequest {
    @ApiProperty()
    @IsNumberString()
    limit: number;

    @ApiProperty()
    @IsNumberString()
    offset: number;
}