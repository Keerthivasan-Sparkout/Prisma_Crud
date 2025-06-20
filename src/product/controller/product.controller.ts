import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProductService } from "../service/product.service";
import { CreateProductDto } from "../dto/product.createdto";
import { identity } from "rxjs";
import { ProductUpadateDto } from "../dto/product.updatedto";

@Controller("/product")
export class ProductController{

    constructor(private productService:ProductService){}

    @Post()
    @UsePipes(ValidationPipe)
    createProduct(@Body() pro:CreateProductDto){
    
        return this.productService.createProduct(pro);
    }

    @Get()
    getAllProduct(){return this.productService.getAllProduct()}
    
    @Get("/:id")
    getProductId(@Param('id',ParseIntPipe) id:number){
        return this.productService.getProductById(id);
    }

    @Patch("/:id")
    updateProduct(@Param('id',ParseIntPipe) id:number,@Body() pro:ProductUpadateDto){
        return this.productService.updateProduct(id,pro)
    }

    @Delete("/:id")
    deleteProduct(@Param('id',ParseIntPipe) id:number){
        return this.productService.deleteProduct(id)
    }

    
    
}