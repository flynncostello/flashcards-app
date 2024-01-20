import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from '../cards/cardsSlice';

export default function Card({ id }) {
  const card = useSelector(state => state.cards[id]);
  const dispatch = useDispatch();
  const [flipped, setFlipped] = useState(false);
  const [changingCard, setChangingCard] = useState(false);
  const [newFront, setNewFront] = useState(card.front);
  const [newBack, setNewBack] = useState(card.back);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCard({ id, front: newFront, back: newBack }));
    setChangingCard(false);
  };

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
      <button onClick={() => setChangingCard(true)}>Change Card</button>
      {changingCard && (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Front" value={newFront} onChange={(e) => setNewFront(e.target.value)} />
          <input type="text" placeholder="Back" value={newBack} onChange={(e) => setNewBack(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      )}
    </li>
  );
}