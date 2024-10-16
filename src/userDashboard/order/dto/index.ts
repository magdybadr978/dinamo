import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsMongoId, IsNumber, IsPhoneNumber, IsPositive, IsString, ValidateNested } from "class-validator";
import mongoose, { Types } from "mongoose";
import { ProductDTO } from "src/vendorDashboard/product/dto";


export class CreateOrderDTO {
  @ApiProperty()
  @IsMongoId()
  userId : Types.ObjectId;

  @ApiProperty({ type : [ProductDTO] , required : true})
  @IsArray()
  @ValidateNested({each : true})
  @Type(()=> ProductDTO)
  products : ProductDTO[];    

  @ApiProperty()
  @IsString()
  address : string

  @ApiProperty()
  @IsPhoneNumber('EG')
  phone : string

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  price : number

  @ApiProperty()
  @IsString()
  status : string

 readonly _id? : mongoose.Schema.Types.ObjectId
}
export class UpdateOrderDTO extends PartialType(CreateOrderDTO){}