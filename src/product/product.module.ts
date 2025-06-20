import { Module } from "@nestjs/common";
import { ProductController } from "./controller/product.controller";
import { ProductService } from "./service/product.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    imports:[PrismaModule],
    controllers:[ProductController],
    providers:[ProductService]
})
export class ProductModule{

}