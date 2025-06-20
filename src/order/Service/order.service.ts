import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CustomerServie } from "src/Customer/service/customer.service";
import { PrismaService } from "src/prisma/service/prisma.service";
import { CreateOrderDto } from "../dto/create.order.dto";

@Injectable()
export class OrderService {

    constructor(private prismaService: PrismaService,
       private customerService: CustomerServie
    ) { }

    async createOrder(email:string,order:CreateOrderDto){
        let get_customer = await this.customerService.getCustomerByEmail(email);
        if (!get_customer) {
            throw new UnauthorizedException("Email not exits")
        }
        return await this.prismaService.order.create({ data: {
            products:order.product,
            customerId:get_customer.customer_id
         } })
    }

}