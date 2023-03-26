import CardItem from "../CardItem/CardItem";

const CardList = ({ cards, onCardClick, onDelete }) => {
  return (
    <div>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} onClick={() => onCardClick(card)} onDelete={() => onDelete(card.id)} />
      ))}
    </div>
  );
};

export default CardList;