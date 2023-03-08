import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { FoodModule } from './food/food.module';
import { ProfileModule } from './profile/profile.module';
import { StoreModule } from './store/store.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { RatingModule } from './rating/rating.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true, cache: true }), FoodModule, ProfileModule, StoreModule, SubscriptionModule, RatingModule, OrderModule],
})
export class AppModule {}
