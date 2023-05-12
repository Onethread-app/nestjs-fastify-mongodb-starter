import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../models/accounts.schema';
import { CreateAccountDto } from '../dto/create-account.dto';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Account.name) private readonly accountModel: Model<AccountDocument>,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async findOne(id: string): Promise<Account> {
    return this.accountModel.findById(id).orFail(new Error('No account found')).exec();
  }

  async update(id: string, createAccountDto: CreateAccountDto): Promise<Account> {
    const updatedAccount = await this.accountModel
      .findByIdAndUpdate(id, createAccountDto, { new: true })
      .orFail(new Error('No account found'))
      .exec();
    return updatedAccount;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.accountModel.deleteOne({ _id: id }).exec();
    return result.deletedCount === 1;
  }
}