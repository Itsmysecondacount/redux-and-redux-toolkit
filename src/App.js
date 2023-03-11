import "./App.css";
import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";
import { getPokemon } from "./api";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  console.log("🚀 ~ file: App.js:12 ~ App ~ pokemons:", pokemons);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={6} offset={9}>
        <img src={logo} alt="Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>{" "}
      <PokemonList pokemons={pokemons} loading={loading} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchProps)(App);
