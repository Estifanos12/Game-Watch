import { React, useState, useEffect } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import { useSelector, useDispatch } from 'react-redux';
import { addGameList } from '../utils/features/gameSlice';
import { requests } from '../Requests/requests';

const Header = ({ random }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(random);
  }, []);

  return (
    <>
      {random && (
        <div
          className="h-[100vh]"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url(${random.background_image})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <NavBar />
          <Hero
            name={random.name}
            rating={random.rating}
            release={random.released}
          />
        </div>
      )}
    </>
  );
};

export default Header;
