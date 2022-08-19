import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonList from './components/pokemonList';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App" >
        <header>
        <h1>POKEDEX</h1>
        </header>
        <main>
          <PokemonList/>
        </main>
      </div>
    </QueryClientProvider>
  );
}
export default App;
