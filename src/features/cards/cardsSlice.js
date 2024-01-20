import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {},
    reducers: {
        addCard: (state, action) => {
            const newCard = action.payload;
            state[newCard.id] = newCard;
        },
        updateCard: (state, action) => {
            const { id, front, back } = action.payload;
            state[id].front = front;
            state[id].back = back;
        },
    },
});

export const { addCard, updateCard } = cardsSlice.actions;

export default cardsSlice.reducer;
