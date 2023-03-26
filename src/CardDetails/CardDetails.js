import { useState } from 'react';
import CardForm from '../CardForm/CardForm';

const CardDetails = ({ card, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSave = (values) => {
    setIsEditing(false);
    onSave(card.id, values);
  };

  return (
    <div>
      {isEditing ? (
        <CardForm initialValues={card} onSubmit={handleSave} onCancel={handleCancelClick} />
      ) : (
        <div>
          <h2>{card.name}</h2>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onDelete(card.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default CardDetails;