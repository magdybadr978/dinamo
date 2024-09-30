import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, cartSchema } from 'src/models/cart/cart.schema';
import { CartController } from './cart.controller';
import { CartRepository } from 'src/models/cart/cart.repository';
import { CartService } from './cart.service';


@Module({
  imports: [ MongooseModule.forFeature([{ name : Cart.name , schema : cartSchema}])],
  controllers: [CartModule],
  providers: [CartService,CartRepository],
  exports : [CartService,CartRepository]
})
export class CartModule {}
