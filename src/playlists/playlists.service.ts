import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';

@Injectable()
export class PlaylistsService {
  private playlists = []; // Temporary in-memory storage

  constructor() {
      this.seed(); // Feltöltjük a mintákkal
  }

  private seed() {
      this.playlists = [
          { id: 1, name: 'Chill Vibes', songIds: [1, 3] },
          { id: 2, name: 'Workout Mix', songIds: [2, 4, 5] },
          { id: 3, name: 'Top Hits', songIds: [1, 2, 3, 4] },
      ];
  }

  create(createPlaylistDto: CreatePlaylistDto) {
    const newPlaylist = { id: Date.now(), ...createPlaylistDto, songs: [] };
    this.playlists.push(newPlaylist);
    return newPlaylist;
  }

  findOne(id: number) {
    return this.playlists.find(playlist => playlist.id == id);
  } 

  addSongToPlaylist(playlistId: number, songId: number) {
      const playlist = this.findOne(playlistId);
      if (playlist && !playlist.songs.includes(songId)) {
          playlist.songs.push(songId);
          return playlist;
      }
      return null;
  }

  removeSongFromPlaylist(playlistId: number, songId: number) {
      const playlist = this.findOne(playlistId);
      if (playlist) {
          playlist.songs = playlist.songs.filter(id => id != songId);
          return playlist;
      }
      return null;
  }

  removePlaylist(id: number) {
      const playlistIndex = this.playlists.findIndex(playlist => playlist.id == id);
      if (playlistIndex > -1) {
          return this.playlists.splice(playlistIndex, 1);
      }
      return null;
  }

}
