import { Coffee } from '../models/coffee';

export const coffees: Coffee[] = [];

export const addCoffee = (data: Coffee) => {
    coffees.push(data);
}
