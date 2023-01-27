import { faker } from '@faker-js/faker';
import { addCoffee, coffees } from './services/coffeeService';

for(let i=0;i<50;i++){
    addCoffee({
        id:faker.datatype.uuid(),
        producer: faker.commerce.productName(),
        stock: faker.datatype.number({min:5,max:100}),
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        country: 'Colombia',
        bean: 'Arabica',
        price: parseInt(faker.commerce.price(),10),
        createdAt: faker.date.recent(),
        upddatedAt: faker.date.recent()
    })
}
console.log(coffees)
