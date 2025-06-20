import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { CustomerController } from "./controller/customer.controller";
import { CustomerServie } from "./service/customer.service";

@Module({
    imports:[PrismaModule],
    controllers:[CustomerController],
    providers:[CustomerServie],
    exports:[CustomerServie]
})
export class CustomerModule{}