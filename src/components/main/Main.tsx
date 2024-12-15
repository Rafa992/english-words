"use client";
import React, { useEffect, useState } from "react";
import { getProfile } from "@/services/getProfile.service";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setUser } from "@/redux/slices/userSlice";
import s from "./Main.module.scss";
import CustomSnackbar from "../ui/customsComponents/CustomSnackbar";
import {
  selectErrorMessage,
  selectErrorStatus,
  selectSeverity,
  setErrorStatus,
} from "@/redux/slices/errorSlice";
import PaletteModal from "../modals/palette-modal/PaletteModal";
import { selectColor } from "@/redux/slices/colorSlice";
import useGetAllWords from "@/hooks/words/useGetAllWords";
import WordsItem from "../words/WordsItem";
import InfoButton from "../info/InfoButton";
import { selectAllWords } from "@/redux/slices/wordsSlice";

export default function Main() {
  const dispatch = useAppDispatch();

  const errorStatus = useAppSelector(selectErrorStatus);
  const errorMessage = useAppSelector(selectErrorMessage);
  const severity = useAppSelector(selectSeverity);
  const words = useAppSelector(selectAllWords)

  const handleCloseSnackbar = () => dispatch(setErrorStatus(false));
  const color = useAppSelector(selectColor);
  const {getAllWords} = useGetAllWords();
  const [updateCard, setUpdateCard] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--baseColor", color);
  }, [color]);

  useEffect(() => {
    const fetchUser = async () => {
      const profile = await getProfile();
      if (profile) {
        dispatch(setUser(profile));
        getAllWords();
      }
    };
    fetchUser();
  }, []);

  return (
    <main className={`${s.main}`}>
      <PaletteModal />
        <WordsItem updateCard={updateCard} setUpdateCard={setUpdateCard}/>
      <CustomSnackbar
        message={errorMessage}
        severity={severity}
        open={errorStatus}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        position={{ vertical: "bottom", horizontal: "right" }}
      />
      {
        words && (
          <InfoButton/>
        )
      }
    </main>
  );
}
