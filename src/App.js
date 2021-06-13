import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import Search from './components/Search'

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [query, setQuery] = React.useState('');

  useEffect(() => {
    const url = `https://www.breakingbadapi.com/api/characters?name=${query}`;
    const fetchItem = async () => {
      const result = await fetch(url);
      const data = await result.json();

      setItems(data);
      setIsLoading(false);
    }
    fetchItem();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} loading={isLoading} />
    </div>
  );
}

export default App;