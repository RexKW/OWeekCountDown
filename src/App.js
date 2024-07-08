import React from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import Countdown from './components/countdown';
import CarouselHorizontal from './components/CarouselHorizontal';
import './App.css';
import O from './assets/Logo Oweek Putih no text.png';
import UC from './assets/LOGO-UC-FIX-SEP-2021-01.png';
import leaf1 from './assets/leaves left-01 .png';
import leaf2 from './assets/leaves right 2-01.png';
import banner from './assets/outline banner-01.png';
import content1 from './assets/outline desktop 3-02.png';
import content2 from './assets/outline phone-02.png';
import leaf3 from './assets/leaves-01.png';

function App() {
  const {ref: parallaxRef1} = useParallax({
    translateX: [35,-50],
    speed: 5,
    ease: 'linear',
  });

  const { ref: parallaxRef2} = useParallax({
    translateX: [-35,50],
    speed: 5,
    ease: 'linear',
  });



  const {ref: parallaxRef5} = useParallax({
    speed: 5
  })

  const {ref: parallaxRef6} = useParallax({
    speed: 30
  })

  const {ref: parallaxRef7} = useParallax({
    speed: 50
  })

  return (
    <div className='bg'>
      <div className='containerLogo'>
        <img src={O} alt='oweek' id='o'/>
        <img src={UC} alt='uc' id='u'/>
      </div>
      <div className='darken'>

      </div>
      <img src={leaf3} alt='leaf' id='leaf3' ref={parallaxRef7}/>
        <CarouselHorizontal/>
      <div className='countdownContainer'>
        <Countdown className='countdown'/>
      </div>
      

      <img src={leaf1} alt='leaf' id='leaf1' ref={parallaxRef1}/>

      <img src={leaf2} alt='leaf' id='leaf2' ref={parallaxRef2}/>


      
        <div className='outline'>
          <div className='outlineTransition'>
        </div>
        <img src={banner} alt='uc' id='banner' ref={parallaxRef5}/>
        <img src={content1} alt='' id='content1' ref={parallaxRef6}/>
        <img src={content2} alt='' id='content2' ref={parallaxRef5}/>
        <div className='firework' id='firework1'></div>
        <div className='firework' id='firework2'></div>

      </div>
    </div>
  );
}

export default App;
