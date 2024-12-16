import { selectAllWords, selectUnlearnedWords, setCurrentWord } from '@/redux/slices/wordsSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import randomFunction from '@/utils/randomFunction'

export default function useRandomWord() {
    const dispatch = useAppDispatch();
    const words = useAppSelector(selectAllWords);
    const unlearnedWords = useAppSelector(selectUnlearnedWords);

    const randomWord = ()=> {
        const rand = randomFunction(words.length);
        const word = unlearnedWords.find(item => item.order == rand);
        if(word){
            dispatch(setCurrentWord(word))
        }
        return word
    }

  return {randomWord}
}
