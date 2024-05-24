import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisH, faPlay, faPause, faRandom, faStepBackward, faStepForward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';


import song1 from "./songs/1.mp3";
import song2 from "./songs/2.mp3";
import song3 from "./songs/3.mp3";
import song4 from "./songs/4.mp3";
import song5 from "./songs/5.mp3";
import song6 from "./songs/6.mp3";
import song7 from "./songs/7.mp3";
import song8 from "./songs/8.mp3";
import song9 from "./songs/9.mp3";
import song10 from "./songs/10.mp3";
import song11 from "./songs/11.mp3";
import song12 from "./songs/12.mp3";
import song13 from "./songs/13.mp3";

const songs = [
  { id: 1, title: 'Days of Elijah', artist: 'Donnie McLuckin', year: 2014, genre: 'Gospel', song: song1 },
  { id: 2, title: 'God will make a way', artist: 'Don Moen', year: 2021, genre: 'Gospel', song: song2 },
  { id: 3, title: 'No Longer a slave', artist: 'Bethel', year: 2020, genre: 'Worship', song: song3 },
  { id: 4, title: 'Dimi mu - Hold Me', artist: 'Gbenga Akinfenwa', year: 2019, genre: 'Gospel', song: song4 },
  { id: 5, title: 'Our Father', artist: 'Don Moen', year: 2018, genre: 'Gospel', song: song5 },
  { id: 6, title: 'Open Up', artist: 'Dunsin Oyekan', year: 2018, genre: 'Gospel', song: song6 },
  { id: 7, title: 'Fragrance', artist: 'DUnsin Oyekan', year: 2018, genre: 'Gospel', song: song7 },
  { id: 8, title: 'Goodness of God', artist: 'GUC', year: 2018, genre: 'Gospel', song: song8 },
  { id: 9, title: 'God is helping us', artist: 'GUC', year: 2018, genre: 'Gospel', song: song9 },
  { id: 10, title: 'Obinigwe', artist: 'GUC', year: 2018, genre: 'Gospel', song: song10 },
  { id: 11, title: 'God of Vengence', artist: 'GUC', year: 2018, genre: 'Gospel', song: song11 },
  { id: 12, title: 'I enter the holy of holies', artist: '', year: 2018, genre: 'Gospel', song: song12 },
  { id: 13, title: 'You said', artist: 'Don Moen', year: 2018, genre: 'Gospel', song: song13 },
];


function MusicApp() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('ended', handleNextClick);
      return () => {
        audio.removeEventListener('ended', handleNextClick);
      };
    }
  }, []);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };



  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
    <div className="music-player">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <Button variant="outline-light" className="p-0">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                <span className="fs-09">Now Playing</span>
                <Button variant="outline-light" className="p-0">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </Button>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>
                  <img
                    src="https://images.pexels.com/photos/3806767/pexels-photo-3806767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    className="song-thumbnail"
                    height={500}
                  />
                </div>
                <marquee className="song-name mt-2 fs-8">{currentSong.title}</marquee>
                <div className="singers fs-09">
                  {currentSong.artist} 
                </div>
                <div className="singers fs-09">
                 {currentSong.year} 
                </div> <div className="singers fs-09">
                  {currentSong.genre}
                </div>
                <audio src={currentSong.song} ref={audioRef} controls loop></audio>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <Button variant="outline-dark" className="me-2">
                  <FontAwesomeIcon icon={faRandom} />
                </Button>
                <Button variant="outline-dark" className="me-2" onClick={handlePrevClick}>
                  <FontAwesomeIcon icon={faStepBackward} />
                </Button>
                <Button variant="outline-dark" className="me-2" onClick={handlePlayPause}>
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </Button>
                <Button variant="outline-dark" className="me-2" onClick={handleNextClick}>
                  <FontAwesomeIcon icon={faStepForward} />
                </Button>
                <Button variant="outline-dark" className="me-2">
                  <FontAwesomeIcon icon={faVolumeUp} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </Container>
  );
}

export default MusicApp;