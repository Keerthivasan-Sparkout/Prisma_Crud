import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsNumber()
    customer_id: number;
    @IsString()
    customer_name: string;
    @IsEmail()
    customer_email: string;

}