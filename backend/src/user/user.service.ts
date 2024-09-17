import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserService {
  private prisma = new PrismaClient();

  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
