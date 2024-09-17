import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  private prisma = new PrismaClient();

  async getUsers(): Promise<any> {
    return await this.prisma.user.findMany();
  }
}
