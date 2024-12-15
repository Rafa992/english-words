import { selectAllWords, selectUnlearnedWords, setEnglishWord, setRussianFullWord, setRussianWord, setCurrentWord } from '@/redux/slices/wordsSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import randomFunction from '@/utils/randomFunction'

export default function useRandomWord() {
    const dispatch = useAppDispatch();
    const words = useAppSelector(selectAllWords);
    const unlearnedWords = useAppSelector(selectUnlearnedWords);

    const randomWord = ()=> {
        const rand = randomFunction(words.length);
        const word = unlearnedWords.find(item => item.order == rand);

        console.log('word', word);
        if(word){
            dispatch(setEnglishWord(word.en))
            dispatch(setRussianWord(word.ru))
            dispatch(setRussianFullWord(word.ruFull))
            dispatch(setCurrentWord(word))
        }
    }

  return {randomWord}
}
