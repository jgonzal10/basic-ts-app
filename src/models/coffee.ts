import { BaseModel } from "./base";

type Countries = 'Colombia'|'Brazil'|'Ethiopia';
type CoffeeBean = 'Arabica'|'Robusta';

export interface Coffee extends BaseModel{
    producer:string|number;
    stock:number;
    image:string;
    description:string;
    country:Countries;
    bean:CoffeeBean;
    price:number;
} 