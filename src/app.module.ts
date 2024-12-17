import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ItemsModule } from './items/items.module';
import { AddressesModule } from './addresses/addresses.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/dataSource';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UsersModule,
    AuthModule,
    InvoicesModule,
    ItemsModule,
    AddressesModule,
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
