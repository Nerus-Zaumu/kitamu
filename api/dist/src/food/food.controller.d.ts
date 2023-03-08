import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    create(createFoodDto: CreateFoodDto): Promise<string>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFoodDto: UpdateFoodDto): string;
    remove(id: string): string;
}
