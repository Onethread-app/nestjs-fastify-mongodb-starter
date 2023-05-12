import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './src/modules/accounts/accounts.module';

const MONGODB_CONNECTION_STRING = 'mongodb://localhost/test';

@Module({
imports: [
MongooseModule.forRoot(MONGODB_CONNECTION_STRING),
AccountModule,
],
})
export class AppModule {}