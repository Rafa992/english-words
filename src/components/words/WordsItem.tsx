import TinderCard from "react-tinder-card";
import {
  selectCurrentWord,
  selectEnglishWord,
  selectRussianFullWord,
  selectRussianWord,
  selectUnlearnedWords,
} from "@/redux/slices/wordsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import useRandomWord from "@/hooks/words/useRandomWord";
import { selectUser } from "@/redux/slices/userSlice";
import s from "./WordsItem.module.scss";
import useCreateColor from "@/hooks/words/useCreateColor";
import useOnSwipe from "@/hooks/words/useOnSwipe";
import { setIncrease } from "@/redux/slices/wordsSlice"

interface IProps {
  updateCard: boolean;
  setUpdateCard: (v: boolean)=> void;

}

export default function WordsItem({updateCard, setUpdateCard}:IProps) {

  const dispatch = useAppDispatch();
  const { randomWord } = useRandomWord();
  const unlearnedWords = useAppSelector(selectUnlearnedWords);
  const user = useAppSelector(selectUser);
  const {createColor} = useCreateColor();

  useEffect(() => {
    dispatch(setIncrease(true))
   randomWord();
  }, [unlearnedWords]);

  const englishWord = useAppSelector(selectEnglishWord);
  const russianWord = useAppSelector(selectRussianWord);
  const russianFullWord = useAppSelector(selectRussianFullWord);
  const currentWord = useAppSelector(selectCurrentWord);

  const {onSwipe} = useOnSwipe({updateCard, setUpdateCard});

  
  useEffect(() => {
    dispatch(setIncrease(true))
  }, [currentWord]);

  const style = {
    background: createColor(currentWord.repetitions), 
    boxShadow: `0 0 '10px' ${createColor(currentWord.repetitions)}`
}

  return (
    <div className={s.wordCard}>
      {user.version === "en-ru" && updateCard && (
        <TinderCard onSwipe={onSwipe} preventSwipe={["up", "down"]}>
          <div style={style} className={s.wordCard_text}>
            <p>{englishWord}</p>
            <p>{currentWord.transcription}</p>
          </div>
        </TinderCard>
      )}
      {user.version === "en-ru" && !updateCard && (
        <TinderCard onSwipe={onSwipe} preventSwipe={["up", "down"]}>
          <div style={style} className={s.wordCard_text}>
            <p>{englishWord}</p>
            <p>{currentWord.transcription}</p>
            <span>{currentWord.repetitions}</span>
          </div>
        </TinderCard>
      )}
      {user.version === "ru-en" && updateCard && (
         <TinderCard onSwipe={onSwipe} preventSwipe={["up", "down"]}>
           <div style={style} className={s.wordCard_text}>{russianFullWord}</div>
       </TinderCard>
      )
      }
      {user.version === "ru-en" && !updateCard && (
         <TinderCard onSwipe={onSwipe} preventSwipe={["up", "down"]}>
           <div style={style} className={s.wordCard_text}>{russianFullWord}</div>
       </TinderCard>
      )
      }
    </div>
  );
}
