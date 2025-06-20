import {  IsString } from "class-validator"

export class ProductUpadateDto{
    @IsString()
    pro_nmae:string
    @IsString()
    pro_price:number
}