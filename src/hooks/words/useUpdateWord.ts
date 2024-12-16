import { axiosWithAuth } from "@/api/interceptors"
import { selectIncrease, selectUnlearnedWords, setIncrease, setUnlearnedWords } from "@/redux/slices/wordsSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { IWords } from "@/types/words.types"

export default function useUpdateWord() {

    const increase = useAppSelector(selectIncrease)
    const unlearnedWords = useAppSelector(selectUnlearnedWords)
    const dispatch = useAppDispatch();

    const updateWord = async(word: IWords)=>{

        if(!increase) return word
        
        try {

            const newWord = {
                ...word, 
                learned: word.repetitions >= 30 ? true : false,
                unlearned: word.repetitions < 30 ? true : false,
                repetitions: word.repetitions + 1,
            }

            const newUnlearnedWords = unlearnedWords.map(item => {
                if(item.id === word.id){
                    return newWord
                }
                return item
            })
            dispatch(setUnlearnedWords(newUnlearnedWords))
    
            const res = await axiosWithAuth.put('/words/edit-word', newWord)
            return res.data;

        } catch (error) {
            console.log('error changing data word', error);
        }
    }

  return {updateWord}
}
