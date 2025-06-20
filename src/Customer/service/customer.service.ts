import { Injectable, UnauthorizedException } from "@nestjs/common";
import {  Prisma } from "generated/prisma";
import { PrismaService } from "src/prisma/service/prisma.service";

@Injectable()
export class CustomerServie{

    constructor(private prisma:PrismaService){}

    async createCustomer(customer:Prisma.customerCreateInput){
        let get_customer=await this.getCustomerByEmail(customer.customer_email);
        if(get_customer){
             throw new UnauthorizedException("Email already exits")
        }
        return await this.prisma.customer.create({data:customer})
    }

    async getCustomerByEmail(email:string){
        return await this.prisma.customer.findUnique({where:{customer_email:email}})
    }

    async getCustomerById(id:number){
        return await this.prisma.customer.findUnique({where:{customer_id:id}})
    }

    async updateCustomer(customer:Prisma.customerUpdateInput){
         let get_customer=await this.getCustomerByEmail(customer.customer_email as string);
        if(!get_customer){
            throw new UnauthorizedException("Id not found")
        }
    return await this.prisma.customer.update({where :{customer_id:get_customer.customer_id},data:customer})
    }

    async getAllCustomer(){
        return this.prisma.customer.findMany()
    }

}