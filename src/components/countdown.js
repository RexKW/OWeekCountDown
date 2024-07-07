import React, { useEffect, useState, useRef } from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import '../styles/countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const {ref: parallaxRef3} = useParallax({
    speed: 20
  })

  const intervalRef = useRef();

  const startTimer = () => {
    const targetDate = new Date('August 16, 2024 00:06:00').getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalRef.current);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? '0' + days : days.toString(),
          hours: hours < 10 ? '0' + hours : hours.toString(),
          minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
          seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='timer' ref={parallaxRef3}>
      <p className='oweekLogo' style={{ fontFamily: 'The Wildtern, sans-serif' }}>O-WEEK 2024</p>
      <section className='container'>
        <p>{timeLeft.days}</p>
        <p className='desc'><small>Days</small></p>
      </section>
      <span className='divider'>:</span>
      <section className='container'>
        <p>{timeLeft.hours}</p>
        <p className='desc'><small>Hours</small></p>
      </section>
      <span className='divider'>:</span>
      <section className='container'>
        <p>{timeLeft.minutes}</p>
        <p className='desc'><small>Minutes</small></p>
      </section>
      <span className='divider'>:</span>
      <section className='container'>
        <p>{timeLeft.seconds}</p>
        <p className='desc'><small>Seconds</small></p>
      </section>
    </div>
  );
}

export default Countdown;
