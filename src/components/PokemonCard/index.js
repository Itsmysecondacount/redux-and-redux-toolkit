import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./PokemonCard.css";
import { StarOutlined } from "@ant-design/icons";

export const PokemonCard = ({ pokemon, loading }) => {
  return (
    <Card
      className="pokemon-card"
      title={pokemon.name}
      cover={<img src={pokemon.name} alt={pokemon.name} />}
      extra={<StarOutlined spin={1} />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};
