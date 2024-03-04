import Aside from "./Componentes/Aside";
import ModalPokemon from "./Componentes/ModalPokemon";
import Pokemons from "./Componentes/Pokedex";
import usePokemonContext from "./hooks/usePokemonContext";

function App() {
  const { showDetailPokemon, closePokemonDetail, pokemonDetail, isLoading } =
    usePokemonContext();

  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto bg-[url(/pokeball-icon.png)] bg-no-repeat bg-[-10%_-20%] overflow-x-hidden">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Aside pokemon={pokemonDetail} isLoading={isLoading} />
        <ModalPokemon
          showModal={showDetailPokemon}
          onCloseModal={closePokemonDetail}
          pokemon={pokemonDetail}
        />
      </main>
    </section>
  );
}

export default App;
