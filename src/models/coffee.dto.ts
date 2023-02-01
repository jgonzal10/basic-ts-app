import { Coffee } from "./coffee";

type Countries = 'Colombia'|'Brazil'|'Ethiopia';
type CoffeeBean = 'Arabica'|'Robusta';

export interface CoffeeDto extends Omit<Coffee, 'id'|'createdAt'|'updatedAt'>{
    producer:string|number;
    stock:number;
    image:string;
    description:string;
    country:Countries;
    bean:CoffeeBean;
    price:number;
} 
export interface UpdateCaffeeDto extends Partial<CoffeeDto> {}