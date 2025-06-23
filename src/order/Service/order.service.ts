import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CustomerServie } from "src/Customer/service/customer.service";
import { PrismaService } from "src/prisma/service/prisma.service";
import { CreateOrderDto } from "../dto/create.order.dto";
import { ProductService } from "src/product/service/product.service";


@Injectable()
export class OrderService {

  constructor(private prismaService: PrismaService,
    private customerService: CustomerServie,
    private productService: ProductService
  ) { }

  async createOrder(email: string, ord: CreateOrderDto) {
    let get_customer = await this.customerService.getCustomerByEmail(email);
    if (!get_customer) {
      throw new UnauthorizedException("Email not exits")
    }

    let products_list: number[] = []
    ord.product.forEach(async ele => {
      let key = await this.productService.getProductByName(ele.product_name).then(pro => pro.pro_id)
      products_list.push(key);
    })


    return await this.prismaService.order.create({
      data: {
        customerId: get_customer.customer_id,
        products:{
        connect:{
            proId:{
            in:products_list
          }
          }
          
        }
      }
    }) 

    // ord.product.forEach(async ele => {
    //     {
    //       proId:await this.productService.getProductByName(ele.product_name).then(pro => pro.pro_id),
    //       quantity: ele.quantity,
    //     }
    //   })

  }
  getOrder(id: number) {
    return this.prismaService.order.findUnique({ where: { order_id: id }, include: { products: true } })
  }

  deleteOrder(id: number) {
    return this.prismaService.order.delete({ where: { order_id: id } })
  }
}