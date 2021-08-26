import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import './HeroSection.css';

const images = [
  { id: 1, url: './images/carousel1.jpg', name: 'aa' },
  { id: 2, url: './images/carousel2.jpg', name: 'aa' },
  { id: 3, url: './images/carousel3.jpg', name: 'aa' },
  { id: 4, url: './images/carousel4.jpg', name: 'aa' },
  { id: 5, url: './images/carousel5.png', name: 'aa' },
  { id: 6, url: './images/carousel6.jpg', name: 'aa' },
  { id: 7, url: './images/carousel7.jpg', name: 'aa' },
  { id: 8, url: './images/carousel8.png', name: 'aa' },
  { id: 9, url: './images/carousel9.jpg', name: 'aa' },
  { id: 10, url: './images/carousel10.jpg', name: 'aa' },
];

function HeroSection() {
  const [image, setImage] = useState(images);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => clearInterval(slider);
  });

  return (
    <section className="carousel">
      {image.map((img, imgIndex) => {
        const { id, url, name } = img;

        let position = 'slide_next';
        if (imgIndex === index) {
          position = 'slide_active';
        }
        if (
          imgIndex === index - 1 ||
          (index === 0 && imgIndex === image.length - 1)
        ) {
          position = 'slide_last';
        }
        return (
          <article key={id} className={position}>
            <img src={url} className="carousel_img" alt={name} />
          </article>
        );
      })}
      <div className="hero-btn">
        <Button
          buttonSize={window.innerWidth <= 960 ? 'btn_medium' : 'btn_large'}
          buttonStyle="btns"
        >
          Ro'yhatdan o'tish
        </Button>
        <Button
          buttonSize={window.innerWidth <= 960 ? 'btn_medium' : 'btn_large'}
          buttonStyle="btns_white"
        >
          Demo <AiOutlineVideoCamera className="watchvideo" />
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
