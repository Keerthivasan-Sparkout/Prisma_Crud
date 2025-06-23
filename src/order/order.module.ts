import { Module } from "@nestjs/common";
import { CustomerModule } from "src/Customer/customer.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { OrderController } from "./Controller/order.controller";
import { OrderService } from "./Service/order.service";
import { ProductModule } from "src/product/product.module";

@Module({
    imports:[PrismaModule,CustomerModule,ProductModule],
    controllers:[OrderController],
    providers:[OrderService]
})
export class OrderModule{

}