import React, {useEffect, useState} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';


function App() {
  const [count, setCount] = useState({animes: []});

  useEffect(() => {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
      .then(response => response.json())
      .then(data => setCount({animes: data.data}))
  });

  return (
    <div className="App">
    <CardList animes = {count.animes}>
    </CardList>
    </div>
  );
}

export default App;
