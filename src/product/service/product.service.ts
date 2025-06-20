import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/service/prisma.service";
import { Prisma } from "generated/prisma";
import { error } from "console";

@Injectable()
export class ProductService{

    constructor(private prisma:PrismaService){}

    async createProduct(pro:Prisma.productCreateInput){        
        
      return await this.prisma.product.create({data:pro})
    }

    getProductById(id:number){
       let product= this.prisma.product.findUnique({where :{pro_id:id}})
       if(!product){
         throw new UnauthorizedException("Id not found")
       }
       return product;
    }

    async updateProduct(id:number,pro:Prisma.productUpdateInput){
        let product= this.prisma.product.findUnique({where :{pro_id:id}})
        if(product==null){
             throw new UnauthorizedException("Id not found")
        }
      return await this.prisma.product.update({where :{pro_id:id},data:pro})
    }

    async deleteProduct(id:number){
        return await this.prisma.product.delete({where:{pro_id:id}})
    }

    async getAllProduct(){
        return await this.prisma.product.findMany()
    }

    

}