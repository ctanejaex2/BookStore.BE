import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { BooksEntity } from './entities';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) { }
    public createTypeOrmOptions(): TypeOrmModuleOptions {
        const options: TypeOrmModuleOptions = {
            type: 'postgres',
            host: this.configService.get('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get('DB_USER'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_NAME'),
            synchronize: false,
            entities: [BooksEntity,],
            logging: process.env.NODE_ENV !== 'production' ? true : true, // need to change
            dropSchema: false,
            migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true' ? true : false,
            extra: {
                connectionLimit: Number(
                    this.configService.get<number>('DB_CONNECTION_LIMIT') ?? 50,
                ),
            },
        };

        console.log(`Connecting to the database...`);
        return options;
    }
}
