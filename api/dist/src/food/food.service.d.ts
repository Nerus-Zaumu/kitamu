import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
export declare class FoodService {
    createMeal(createFoodDto: CreateFoodDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFoodDto: UpdateFoodDto): string;
    remove(id: number): string;
}
