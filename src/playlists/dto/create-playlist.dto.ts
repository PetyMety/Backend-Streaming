import { IsNotEmpty, IsString, IsOptional, IsArray, IsInt } from 'class-validator';

export class CreatePlaylistDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsArray()
    @IsInt({ each: true }) // Ellenőrzi, hogy minden elem szám (zeneszám azonosító)
    songIds?: number[]; // Opcionálisan tartalmazhat zeneszám azonosítókat
}
