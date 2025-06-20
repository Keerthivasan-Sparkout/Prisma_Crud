import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CustomerServie } from "../service/customer.service";
import { CreateCustomerDto } from "../dtos/create.customer.dto";

@Controller("/customer")
export class CustomerController {

    constructor(private customerService: CustomerServie) { }


    @Get()
    async getAllCustomer() {
        return this.customerService.getAllCustomer()
    }

    @Post()
    createCustomer(@Body() customer: CreateCustomerDto) {
        return this.customerService.createCustomer(customer)
    }

    @Get("/by-email/:email")
    getCustomerByEmail(@Param('email') email: string) {
        return this.customerService.getCustomerByEmail(email)
    }

    @Get("/:id")
    async getCustomerById(@Param('id', ParseIntPipe) id: number) {
        return await this.customerService.getCustomerById(id)
    }

    @Patch()
    async updateCustomerById(@Body() customer: CreateCustomerDto) {
        return await this.customerService.updateCustomer(customer)
    }


}