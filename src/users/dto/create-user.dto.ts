export class CreateUserDto {
  save(): Promise<import('../entities/user.entity').User> {
    throw new Error('Method not implemented.');
  }
  name: string;
  email: string;
  password: string;
}
