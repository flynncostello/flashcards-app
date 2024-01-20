import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {},
    /*
    Slice for topics:
    topics: {
        topicX: {
            id: '1',
            name: 'test',
            icon: 'test',
            quizIds: ['1', '2'],
        },
        topicY: {
            id: '2',
            name: 'test2',
            icon: 'test2',
            quizIds: ['3', '4'],
        },
    }
    */
    reducers: {
        addTopic: (state, action) => {
            // state here refers to state.topics --> uses the name to access store's topics slice
            const topic = action.payload;
            state[topic.id] = topic;
        },
        removeTopic: (state, action) => {
            delete state[action.payload];
        },
        addQuizToTopic: (state, action) => {
            const { topicId, quizId } = action.payload;
            state[topicId].quizIds.push(quizId);
        },
    },
});

export const { addTopic, removeTopic, addQuizToTopic } = topicsSlice.actions; // Used in Topics.js when calling dispatch

export const selectTopics = state => state.topics;

export default topicsSlice.reducer; // Used in rootReducer
