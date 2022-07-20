import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz(state, action) {
      const { id, topicId, name } = action.payload;
      state.quizzes[id] = {
        id: id,
        topicId: topicId,
        name: name,
        cardIds: []
      };
    }
  }
});

export default quizzesSlice.reducer;
export const quizzesSelector = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
