import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    create(createRatingDto: CreateRatingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRatingDto: UpdateRatingDto): string;
    remove(id: string): string;
}
