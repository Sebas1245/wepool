import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createCompany(): Promise<void> {
  const tec = await prisma.company.upsert({
    where: {
      id: 1,
    },
    create: {
      name: "Tec de Monterrey",
      street: "Av. Eugenio Garza Sada Sur",
      number: 2501,
      zipCode: 64849,
      city: "Monterrey",
      state: "Nuevo Leon",
      country: "Mexico",
    },
    update: {},
  });
  console.log(tec);
}

async function createUsers(): Promise<void> {
  const bernie = await prisma.user.upsert({
    create: {
      fname: "Bernardo",
      lname: "Garcia",
      street: "Dover",
      number: 3049,
      zipCode: 64830,
      city: "Monterrey",
      phoneNumber: "4775282906",
      latitude: 25.6498,
      longitude: -100.2848,
      companyId: 1,
    },
    where: {
      id: 1,
    },
    update: {},
  });
  const sebas = await prisma.user.upsert({
    create: {
      fname: "Sebastian",
      lname: "Saldana",
      street: "Paseo Milan",
      number: 375,
      zipCode: 64346,
      city: "Monterrey",
      latitude: 25.7484,
      longitude: -100.4084,
      phoneNumber: "8110161527",
      car: {
        create: {
          brand: "Nissan",
          model: "Versa",
          year: 2013,
          plateNumber: "SRJ-90-85",
          capacity: 5,
          color: "Sand",
        },
      },
      carId: 1,
      companyId: 1,
    },
    where: {
      id: 2,
    },
    update: {},
  });
  const diego = await prisma.user.upsert({
    create: {
      fname: "Diego",
      lname: "Guerreo",
      street: "Quimicos",
      number: 110,
      zipCode: 64700,
      city: "Monterrey",
      phoneNumber: "4777702121",
      latitude: 25.6876,
      longitude: -100.1824,
      companyId: 1,
    },
    where: {
      id: 3,
    },
    update: {},
  });
  const javi = await prisma.user.upsert({
    create: {
      fname: "Javier",
      lname: "Martinez",
      street: "Rio Nazas",
      number: 331,
      zipCode: 64700,
      city: "Monterrey",
      latitude: 25.1234,
      longitude: -100.1234,
      phoneNumber: "4777175757",
      car: {
        create: {
          brand: "Audi",
          model: "A3",
          year: 2017,
          plateNumber: "GTO-70-75",
          capacity: 5,
          color: "White",
        },
      },
      carId: 2,
      companyId: 1,
    },
    where: {
      id: 4,
    },
    update: {},
  });
  console.log(bernie, sebas);
}

async function main() {
  await createCompany();
  await createUsers();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
