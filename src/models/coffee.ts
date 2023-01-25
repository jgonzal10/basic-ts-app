import { BaseModel } from "./base";

type Countries = 'Colombia'|'Brazil'|'Ethiopia';
type CoffeeBean = 'Arabica'|'Robusta';

export interface Coffee extends BaseModel{
    producer:string|number;
    stock:number;
    country:Countries;
    bean:CoffeeBean
} 