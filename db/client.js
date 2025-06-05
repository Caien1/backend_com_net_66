import {PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


async function createUser(){

}

// createUser().then(async ()=>{
//     await prisma.$disconnect()
// })



async function main() {
  // Run a simple query (e.g., list users)
  const users = await prisma.user.findMany();
  console.log('Users:', users);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error('Error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });