import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import song1 from "./songs/1.mp3"
import song2 from "./songs/2.mp3"
import song3 from "./songs/3.mp3"
import song4 from "./songs/4.mp3"
import song5 from "./songs/5.mp3"
import song6 from "./songs/6.mp3"
import song7 from "./songs/7.mp3"
import song8 from "./songs/8.mp3"
import song9 from "./songs/9.mp3"
import song10 from "./songs/10.mp3"
import song11 from "./songs/11.mp3"
import song12 from "./songs/12.mp3"
import song13 from "./songs/13.mp3"


const songs = [
  { id: 1, title: 'Days of Elijah', artist: 'Artist 1', year: 2014, genre: 'Gospel', song:song1 },
  { id: 2, title: 'God will make a way', artist: 'Don Moen', year: 2021, genre: 'Gospel', song:song2 },
  { id: 3, title: 'No Longer a slave', artist: 'Bethel', year: 2020, genre: 'Worship',  song:song3 },
  { id: 4, title: 'Dimi mu - Hold Me', artist: 'Gbenga AKinfenwa', year: 2019, genre: 'Gospel', song:song4 },
  { id: 5, title: 'Our Father', artist: 'Don Moen', year: 2018, genre: 'Gospel',  song:song5 },
  { id: 6, title: 'Open Up', artist: 'Dunsin Oyekan', year: 2018, genre: 'Gospel', song:song6 },
  { id: 7, title: 'Fragrance', artist: 'DUnsin Oyekan', year: 2018, genre: 'Gospel', song:song7 },
  { id: 8, title: 'Goodness of God', artist: 'GUC', year: 2018, genre: 'Gospel', song:song8 },
  { id: 9, title: 'God is helping us', artist: 'GUC', year: 2018, genre: 'Gospel' ,  song:song9},
  { id: 10, title: 'Obinigwe', artist: 'GUC', year: 2018, genre: 'Gospel', song:song10 },
  { id: 11, title: 'God of Vengence', artist: 'GUC', year: 2018, genre: 'Gospel', song:song11 },
  { id: 12, title: 'I enter the holy of holies', artist: '', year: 2018, genre: 'Gospel', song:song12},
  { id: 13, title: 'You said', artist: 'Don Moen', year: 2018, genre: 'Gospel', song:song13 },


];

function MusicApp() {
  const [currentSongIndex, setCurrentSongIndex] = useState(songs);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePrevClick = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  };

  const handleNextClick = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container className='d-flex justify-content-center mt-5'>
      <Row>
        <Col>
          <Card style={{width:"320px"}}>
            <Card.Body>
              <Card.Title>{currentSong.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {currentSong.artist} - {currentSong.year} - {currentSong.genre}
              </Card.Subtitle>
              <audio
              src={songs.song}
              ref={audioRef}
              />
              {/* <audio
                src={`/songs/${currentSong.id}.mp3`}
                ref={audioRef}
                controls
                loop
              ></audio> */}
              <div className="mt-3">
                <Button variant="outline-primary" onClick={handlePrevClick}>
                  Prev
                </Button>
                <Button
                  variant="outline-primary"
                  className="mx-2"
                  onClick={handlePlayPauseClick}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button variant="outline-primary" onClick={handleNextClick}>
                  Next
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MusicApp;