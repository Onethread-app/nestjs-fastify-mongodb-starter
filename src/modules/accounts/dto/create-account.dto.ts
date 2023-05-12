import { IsString, IsEmail, MinLength } from 'class-validator';


// add the ! non-null assertion operator 
export class CreateAccountDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}
