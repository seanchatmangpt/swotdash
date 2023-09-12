import { faker } from "@faker-js/faker";

export const generatePESTLEData = () => {
  const sections = [
    "Political",
    "Economic",
    "Sociocultural",
    "Technological",
    "Environmental",
    "Legal",
  ];
  const report = {
    project: faker.company.name(),
    date: faker.date.recent().toLocaleDateString(),
    author: faker.person.fullName(),
    version: faker.system.semver(),
  };

  sections.forEach((section) => {
    report[section] = Array.from({
      length: faker.number.int({ min: 2, max: 5 }),
    }).map(() => ({
      issue: faker.commerce.department(),
      // impact: faker.random.arrayElement(['Low', 'Medium', 'High']),
      impact: ["Low", "Medium", "High"][Math.round(Math.random() * 2)],
      description: faker.lorem.sentence({ min: 10, max: 20 }),
    }));
  });

  return report;
};
