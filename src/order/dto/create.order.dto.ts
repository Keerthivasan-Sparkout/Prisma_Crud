import { IsNotEmpty, IsString } from "class-validator";
import { Product } from "generated/prisma";

export class CreateOrderDto{

    @IsString()
    @IsNotEmpty()
    product:{product_name:string,quantity:number}[]

}