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
exports.AuthService = void 0;
const prisma_service_1 = require("./../prisma/prisma.service");
const auth_supabase_1 = require("./auth.supabase");
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(supabaseService, prismaService) {
        this.supabaseService = supabaseService;
        this.prismaService = prismaService;
    }
    async signUpWithEmail(email) {
        const { error } = await this.supabaseService.supabase.auth.signUp({
            email: email,
        });
        if (error) {
            console.log(error);
        }
        else {
            console.log('User created');
        }
    }
    async createClientAccount(clientDto) {
        const { data, error } = await this.supabaseService.supabase.auth.signUp({
            email: clientDto.email,
            password: clientDto.password,
        });
        if (error) {
            return {
                type: error.name,
                error: error.message,
                status: error.status,
            };
        }
        return {
            success: true,
            message: 'OTP sent to your email',
        };
    }
    async confirmSignup(otp) {
        const confirmOtp = await this.supabaseService.supabase;
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_supabase_1.SupabaseService,
        prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map