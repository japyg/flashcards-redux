import {createSlice} from '@reduxjs/toolkit'

const topicsSlice = createSlice({
  name: 'topics',
  initialState: { 
    topics: {}
  },
  reducers: {
    addTopic(state, action){
      const {id, name, icon} = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      }
    }
  }
})

export default topicsSlice.reducers;
export const { addTopic } = topicsSlice.actions;