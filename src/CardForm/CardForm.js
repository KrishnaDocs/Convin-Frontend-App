import { useState } from 'react';

const CardForm = ({ onSubmit, onCancel, initialValues }) => {
  const [name, setName] = useState(initialValues.name || '');
  const [videoLink, setVideoLink] = useState(initialValues.videoLink || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, videoLink });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Video link:
        <input type="text" value={videoLink} onChange={(event) => setVideoLink(event.target.value)} />
      </label>
      <button type="submit">
        {initialValues ? 'Save' : 'Create'}
        </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default CardForm;