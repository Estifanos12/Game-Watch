import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requests } from '../Requests/requests';
import { addGameList } from '../utils/features/gameSlice';
import Header from '../components/Header';

const Home = () => {
  const [games, setGames] = useState([]);
  const gameList = useSelector((state) => state.gameList.game);
  const dispatch = useDispatch();

  const fetchData = () => {
    const checkLocalStorage = localStorage.getItem('games');
    if (checkLocalStorage) {
      setGames(JSON.parse(checkLocalStorage));
      dispatch(addGameList(JSON.parse(checkLocalStorage)));
    } else {
      fetch(`${requests.gamesList}?key=${process.env.REACT_APP_GAME_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('games', JSON.stringify(data.results));
          setGames(data.results);
          dispatch(addGameList(data.results));
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const randomGame = gameList[Math.floor(Math.random() * gameList.length)];

  return (
    <div>
      {randomGame ? <Header random={randomGame} /> : <div>Loading</div>}
    </div>
  );
};

export default Home;
