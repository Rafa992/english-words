import { axiosWithAuth } from '@/api/interceptors';
import { IEditOrder } from '@/types/products.types';
import { AxiosError } from 'axios';
import useInitialError from '../error/useInitialError';
import useGetAllOrders from '../table/useGetAllOrders';

export default function useUpdateOrder() {

    const {initialError} = useInitialError();
    const {getAllOrders} = useGetAllOrders();

    const updateOrder = async(order: IEditOrder) => {
        try {
            await axiosWithAuth.put("/products/edit-orders", order);
            initialError(true, 'Заказ успешно обновлен!', 'success');
            getAllOrders();
        } catch (error) {
            if (error instanceof AxiosError) {
                initialError(true, `Ошибка: ${error.response?.data?.message || error.message}`, 'error');
              } else if (error instanceof Error) {
                initialError(true, `Ошибка: ${error.message}`, 'error');
              } else {
                initialError(true, 'Неизвестная ошибка', 'error');
              }
        }
    }

    return {updateOrder}
}
