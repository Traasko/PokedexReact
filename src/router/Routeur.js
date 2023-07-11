import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import PokemonDetails from '../component/PokemonDetails';
import PokemonList from '../component/PokemonList';
import SearchForm from '../component/SearchForm';
import Navigation from '../layout/navbar';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/meteo" element={<SearchForm />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
