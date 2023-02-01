import { faker } from '@faker-js/faker';
import { Coffee } from '../models/coffee';
import { CoffeeDto, UpdateCaffeeDto } from '../models/coffee.dto';
export const coffees: Coffee[] = [];

export const addCoffee = (data: CoffeeDto):Coffee => {
    const newCoffee = {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()}
    coffees.push(newCoffee);
    return newCoffee;
}

export const updateCoffee = (id: string, changes: UpdateCaffeeDto):Coffee => {
    const index = coffees.findIndex(item => item.id === id);
    const prevData = coffees[index];
    coffees[index] = {
        ...prevData,
        ...changes
      }
    return coffees[index];
}
