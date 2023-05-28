import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Result(props) {
  useEffect(() => {
    AOS.init({
      delay: 1000 // Set delay to 1000 milliseconds (1 second)
    });
  }, []);

  const boxes = props.movies.map((item, index) => {
    return (
      <Box
        key={index}
        image={item.poster_path}
        title={item.original_title}
        rating={item.vote_average}
      />
    );
  });

  return (
    <div className='result-container' data-aos='fade-up'>
      {boxes}
    </div>
  );
}

const Box = (props) => {
  const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
  return (
    <div className='result-box shadow'>
      <img src={IMGPATH + props.image} alt='' className='result-image' />
      <div className='result-details'>
        <span className='result-title'>{props.title}</span>
        <span className='result-rating'>{props.rating}</span>
      </div>
    </div>
  );
};
