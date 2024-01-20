import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({ 
    name: 'quizzes',
    initialState: {},
    reducers: {
        addQuiz: (state, action) => {
            const quiz = action.payload;
            state[quiz.id] = quiz;
        },
        removeQuiz: (state, action) => {
            delete state[action.payload.id];
        },
        addCardToQuiz: (state, action) => {
            const { quizId, cardId } = action.payload;
            state[quizId].cardIds.push(cardId);
        },
    },
});

export const { addQuiz, removeQuiz, addCardToQuiz } = quizzesSlice.actions;

export const selectQuizzes = state => state.quizzes;

export default quizzesSlice.reducer;

