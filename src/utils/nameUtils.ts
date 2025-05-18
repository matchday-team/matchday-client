import { Faker, ko } from '@faker-js/faker';

const faker = new Faker({
  locale: [ko],
});

export const getRandomName = () => faker.person.fullName().slice(0, 4);
