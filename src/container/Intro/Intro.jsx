// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if(playVideo){
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
  <div className='app__video'>
    <video 
      src={meal}
      ref={vidRef}
      type='video/mp4'
      loop
      controls={false}
      muted
    />
    <div className='app__video-overlay flex__center'
     onClick={handleVideo}>
        {playVideo ? (
          <BsPauseFill className='pause-btn' color='#fff' fontSize={32}/>
        ) : <BsFillPlayFill className='play-btn' color='#fff' fontSize={32}/> }
    </div>
  </div>
  );
};

export default Intro;
