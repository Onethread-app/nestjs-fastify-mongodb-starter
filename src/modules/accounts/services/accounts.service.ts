import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from '../models/accounts.schema';
import { CreateAccountDto } from '../dto/create-account.dto';
import { AccountRepository } from '../repositories/accounts.repository';

@Injectable()
export class AccountsService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountRepository.create(createAccountDto);
  }

  async findAll(): Promise<Account[]> {
    return this.accountRepository.findAll();
  }

  async findOne(id: string): Promise<Account> {
    return this.accountRepository.findOne(id);
  }

  async update(id: string, createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountRepository.update(id, createAccountDto);
  }

  async delete(id: string): Promise<boolean> {
    return this.accountRepository.delete(id);
  }
}
