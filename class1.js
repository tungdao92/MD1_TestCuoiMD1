class Song{
    id_song;
    name_song;
    lyric;
    constructor(id_song, name_song, lyric) {
        this.id_song = id_song;
        this.name_song = name_song;
        this.lyric = lyric;
    }
    getId_song(){
        return this.id_song;
    }
    setId_song(id_song){
        this.id_song = id_song;
    }
    getName_song(){
        return this.name_song;
    }
    setName_song(name_song){
        this.name_song = name_song;
    }
}