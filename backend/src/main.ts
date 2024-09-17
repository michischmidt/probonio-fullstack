import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prisma = new PrismaClient();

  try {
    // API used: https://jsonplaceholder.typicode.com/
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    const users = response.data;

    for (const user of users) {
      await prisma.user.create({
        data: {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          street: user.address.street,
          suite: user.address.suite,
          city: user.address.city,
          zipcode: user.address.zipcode,
          lat: parseFloat(user.address.geo.lat),
          lng: parseFloat(user.address.geo.lng),
          companyName: user.company.name,
          catchPhrase: user.company.catchPhrase,
          bs: user.company.bs,
        },
      });
    }

    console.log('Users fetched and persisted successfully!');
  } catch (error) {
    console.error('Error fetching or persisting users:', error.message);
  }

  await app.listen(3000);
}
bootstrap();
