import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
export declare class RatingService {
    create(createRatingDto: CreateRatingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRatingDto: UpdateRatingDto): string;
    remove(id: number): string;
}
