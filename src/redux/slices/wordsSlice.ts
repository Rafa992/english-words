import { IWords } from "@/types/words.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  allWords: IWords[];
  currentWord: IWords;
  learnedWords: IWords[];
  unlearnedWords: IWords[];
  englishWord: string;
  russianWord: string;
  russianFullWord: string;
}

const initialState: IInitialState = {
  allWords: [],
  currentWord: {} as IWords,
  learnedWords: [],
  unlearnedWords: [],
  englishWord: '',
  russianWord: '',
  russianFullWord: '',
};

const wordsSlice = createSlice({
  name: "wordsSlice",
  initialState,
  reducers: {
    setAllWords: (state, action: PayloadAction<IWords[]>) => {
      state.allWords = action.payload;
    },
    setCurrentWord: (state, action: PayloadAction<IWords>) => {
      state.currentWord = action.payload;
    },
    setLearnedWords: (state, action: PayloadAction<IWords[]>) => {
      state.learnedWords = action.payload;
    },
    setUnlearnedWords: (state, action: PayloadAction<IWords[]>) => {
      state.unlearnedWords = action.payload;
    },
    setEnglishWord: (state, action: PayloadAction<string>) => {
      state.englishWord = action.payload;
    },
    setRussianWord: (state, action: PayloadAction<string>) => {
      state.russianWord = action.payload;
    },
    setRussianFullWord: (state, action: PayloadAction<string>) => {
      state.russianFullWord = action.payload;
    },
  },
});

export const selectAllWords = (state: RootState): IWords[] =>
  state.wordsReducer.allWords;
export const selectCurrentWord = (state: RootState): IWords =>
  state.wordsReducer.currentWord;
export const selectLearnedWords = (state: RootState): IWords[] =>
  state.wordsReducer.learnedWords;
export const selectUnlearnedWords = (state: RootState): IWords[] =>
  state.wordsReducer.unlearnedWords;
export const selectEnglishWord = (state: RootState): string =>
  state.wordsReducer.englishWord;
export const selectRussianWord = (state: RootState): string =>
  state.wordsReducer.russianWord;
export const selectRussianFullWord = (state: RootState): string =>
  state.wordsReducer.russianFullWord;

export const {
  setAllWords,
  setCurrentWord,
  setLearnedWords,
  setUnlearnedWords,
  setEnglishWord,
  setRussianWord,
  setRussianFullWord
} = wordsSlice.actions;
export default wordsSlice.reducer;
