import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './models/accounts.schema';
import { AccountsController } from './controllers/account.controller';
import { AccountsService } from './services/accounts.service';
import { AccountRepository } from './repositories/accounts.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
controllers: [AccountsController],
providers: [AccountsService, AccountRepository],
exports: [AccountsService],
})
export class AccountModule {}