import { Module } from "@nestjs/common";
import { CustomerModule } from "src/Customer/customer.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { OrderController } from "./Controller/order.controller";
import { OrderService } from "./Service/order.service";

@Module({
    imports:[PrismaModule,CustomerModule],
    controllers:[OrderController],
    providers:[OrderService]
})
export class OrderModule{

}