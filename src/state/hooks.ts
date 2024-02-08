import { useCallback, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { loadCustomers } from "./action";
import { removeCustomer } from "utils/apiHelpers";
import { deleteCustomer } from "./customer";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCustomer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCustomers());
  }, []);

  const { customers, isLoading } = useAppSelector((state) => state.customer);
  console.log("customers", customers);
  return { customers, isLoading };
};

export const useDeleteCustomer = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (_id: string) => {
      const response = await removeCustomer(_id);
      if (response) {
        dispatch(deleteCustomer({ id: _id }));
      }
    },
    [dispatch]
  );
};
