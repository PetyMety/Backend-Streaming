import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.create(createPlaylistDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistsService.findOne(+id);
  }

  @Post(':listid/:songid')
  addSong(@Param('listid') listId: number, @Param('songid') songId: number) {
      return this.playlistsService.addSongToPlaylist(listId, songId);
  }


  @Delete(':listid/:songid')
  removeSong(@Param('listid') listId: number, @Param('songid') songId: number) {
      return this.playlistsService.removeSongFromPlaylist(listId, songId);
  }

  @Delete(':listid')
  removePlaylist(@Param('listid') listId: number) {
     return this.playlistsService.removePlaylist(listId);
  }
}
