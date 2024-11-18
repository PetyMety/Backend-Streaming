import { IsNotEmpty, IsString, IsInt, IsPositive, IsOptional, IsNumber } from 'class-validator';

export class CreateSongDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    artist: string;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    duration: number; // in seconds

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    price: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    rating?: number; // rating between 1-5
}
