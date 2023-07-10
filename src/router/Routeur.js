import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'
import PokemonDetails from '../component/PokemonDetails'
import PokemonList from '../component/PokemonList'
 
const Routeur = () => {
    return (
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<PokemonList />}/>
          <Route path="/pokemon/:id" element={<PokemonDetails />}/>
            <Route path="*" element={<NoMatch />} />
          </Routes>
      </BrowserRouter>
    )
}
 
export default Routeur