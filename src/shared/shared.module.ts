import { Module } from '@nestjs/common';
import { TransformInterceptor } from './interceptors/transorm-response.interceptor';

@Module({
    providers: [TransformInterceptor],
    exports: [TransformInterceptor],
})
export class SharedModule { }
