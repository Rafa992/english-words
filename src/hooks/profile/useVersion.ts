import { axiosWithAuth } from '@/api/interceptors'
import { selectUser, setUser } from '@/redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'

export default function useVersion() {

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const version = async()=> {
    try {
      const profile = {
        ...user,
        version: user.version === 'en-ru' ? 'ru-en' : 'en-ru',
      }
      const res = await axiosWithAuth.put('/user/profile', profile)
      dispatch(setUser(res.data))
    } catch (error) {
      
    }
  }

  return {version}
}
