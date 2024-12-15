import { axiosWithAuth } from '@/api/interceptors'
import { selectUser, setUser } from '@/redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'

export default function useLaterality() {

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const laterality = async()=> {
    try {
      const profile = {
        ...user,
        laterality: user.laterality === 'right' ? 'left' : 'right',
      }
      const res = await axiosWithAuth.put('/user/profile', profile)
      dispatch(setUser(res.data))
    } catch (error) {
      
    }
  }

  return {laterality}
}
