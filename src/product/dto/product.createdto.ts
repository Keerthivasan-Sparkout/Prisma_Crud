import { IsNumber, IsString } from "class-validator";

export class CreateProductDto{
    
    @IsString()
    pro_nmae:string;

    @IsNumber()
    pro_price:number;
}