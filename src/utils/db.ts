import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

prisma
  .$connect()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .then(() => console.log('Database connected'));
