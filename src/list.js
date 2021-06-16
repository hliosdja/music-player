import {v4 as uuidv4} from 'uuid';

const songList = () =>{
    return [
        {
            title: 'Grevious Lady',
            audio: './music/Grievious Lady.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000309588690-ctc3sk-t500x500.jpg',
            artist: 'Team Grimoire vs Laur',
            id: uuidv4(),
            active: true
        },
        {
            title: 'Fracture Ray',
            audio: './music/Fracture Ray.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000374785374-2azoz6-t500x500.jpg',
            artist: 'Sakuzyo',
            id: uuidv4(),
            active: false
        }
    ];
}

export default songList;