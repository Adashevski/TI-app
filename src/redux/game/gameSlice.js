import { createSlice } from '@reduxjs/toolkit';
import { playerDraw } from './gameOperations';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    playersCount: 3,
    playersNames: [],
    result: [],
  },
  reducers: {
    setPlayersCount: (state, action) => {
      state.playersCount = action.payload;
    },
    startGame: (state) => {
      state.result = playerDraw(state.playersCount, state.playersNames);
    },
    addPlayerNames: (state, action) => {
      state.playersNames = action.payload;
    },
  },
});

export const { setPlayersCount, startGame, addPlayerNames } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;