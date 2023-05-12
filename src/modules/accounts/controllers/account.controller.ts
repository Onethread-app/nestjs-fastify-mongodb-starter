import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { AccountsService } from '../services/accounts.service';
  import { CreateAccountDto } from '../dto/create-account.dto';
  import { Account } from '../models/accounts.schema';
  
  @Controller('accounts')
  export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}
  
    @Post()
    async create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
      return this.accountsService.create(createAccountDto);
    }
  
    @Get()
    async findAll(): Promise<Account[]> {
      return this.accountsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Account> {
      return this.accountsService.findOne(id);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() createAccountDto: CreateAccountDto,
    ): Promise<Account> {
      return this.accountsService.update(id, createAccountDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<boolean> {
      return this.accountsService.delete(id);
    }
  }
  