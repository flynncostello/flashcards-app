import { combineReducers } from 'redux';
import topicsReducer from '../features/topics/topicsSlice';
import cardsReducer from '../features/cards/cardsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';

const rootReducer = combineReducers({
    topics: topicsReducer,
    cards: cardsReducer,
    quizzes: quizzesReducer,
});

export default rootReducer;