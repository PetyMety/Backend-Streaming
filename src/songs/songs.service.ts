import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {

  private songs = [];

  constructor() {
      this.seed(); // Feltöltjük a mintákkal
  }

  private seed() {
      this.songs = [
          { id: 1, title: 'Song One', artist: 'Artist A', duration: 210, price: 1.99, rating: 4.5 },
          { id: 2, title: 'Song Two', artist: 'Artist B', duration: 180, price: 0, rating: 4.0 },
          { id: 3, title: 'Song Three', artist: 'Artist C', duration: 240, price: 2.99, rating: 5.0 },
          { id: 4, title: 'Song Four', artist: 'Artist D', duration: 300, price: 3.49, rating: 3.5 },
          { id: 5, title: 'Song Five', artist: 'Artist E', duration: 150, price: 0, rating: 4.8 },
      ];
  }

  create(createSongDto: CreateSongDto) {
      const newSong = { id: this.songs.length + 1, ...createSongDto };
      this.songs.push(newSong);
      return newSong;
  }

  findAll() {
    return this.songs;
  }

  findOne(id: number) {
    return this.songs.find(song => song.id == id);
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    const songIndex = this.songs.findIndex(song => song.id == id);
        if (songIndex > -1) {
            this.songs[songIndex] = { ...this.songs[songIndex], ...updateSongDto };
            return this.songs[songIndex];
        }
        return null;
  }

  remove(id: number) {
    const songIndex = this.songs.findIndex(song => song.id == id);
    if (songIndex > -1) {
        return this.songs.splice(songIndex, 1);
    }
    return null;
  }


  //sadasdasas
  findFreeSongs() {
    return this.songs.filter(song => song.price == 0);
  }

  findTopSongs(count: number) {
    return this.songs.sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, count);
  }

  findPopularArtists() {
    const artistCounts = this.songs.reduce((acc, song) => {
        acc[song.artist] = (acc[song.artist] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(artistCounts).map(([artist, numberOfSongs]) => ({ artist, numberOfSongs }));
  }

}
