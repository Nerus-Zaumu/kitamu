"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFoodDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFoodDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(30),
    (0, swagger_1.ApiProperty)({
        example: 'Koki Corn',
        required: true,
    }),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        name: 'Image here',
        required: true,
    }),
    __metadata("design:type", Blob)
], CreateFoodDto.prototype, "thumbnail", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.MinLength)(75),
    (0, swagger_1.ApiProperty)({
        name: 'Meal description',
        required: true,
    }),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0.5,
    }),
    __metadata("design:type", Number)
], CreateFoodDto.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 0.5,
        required: true,
    }),
    __metadata("design:type", Number)
], CreateFoodDto.prototype, "price", void 0);
exports.CreateFoodDto = CreateFoodDto;
exports.default = CreateFoodDto;
//# sourceMappingURL=create-food.dto.js.map