import { IsNumberString } from "class-validator";

export class PagingRequest {
    @IsNumberString()
    limit: number;
    @IsNumberString()
    offset: number;
}