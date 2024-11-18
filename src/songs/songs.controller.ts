import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSongDto: CreateSongDto) {
    return this.songsService.update(+id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(+id);
  }

  @Get('free')
  findFreeSongs() {
      return this.songsService.findFreeSongs();
  }

  @Get('top')
  findTopSongs(@Query('count') count: number = 10 ) {
      return this.songsService.findTopSongs(Number(count));
  }

  @Get('popularArtists')
  findPopularArtists() {
      return this.songsService.findPopularArtists();
  }
}
