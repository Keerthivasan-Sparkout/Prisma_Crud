import { Body, Controller, Param, Post, UnauthorizedException } from "@nestjs/common";
import { OrderService } from "../Service/order.service";
import { CreateOrderDto } from "../dto/create.order.dto";
import { CustomerServie } from "src/Customer/service/customer.service";

@Controller("/order")
export class OrderController {

    constructor(private orderService: OrderService,
        
    ) { }

    @Post("/:email")
    async createOrder(@Param('email') email:string,@Body() order: CreateOrderDto) {
        
       return this.orderService.createOrder(email,order)
    }

}