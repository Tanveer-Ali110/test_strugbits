import { AppDispatch, RootState } from "state/store";
import {
  failledToLoadData,
  loadCustomersData,
  startLoadData,
  stopLoadData,
} from ".";
import { getCustomers } from "utils/apiHelpers";

export const loadCustomers =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(startLoadData());

      const data = await getCustomers();
      dispatch(loadCustomersData({ customers: data }));

      dispatch(stopLoadData());
    } catch (error) {
      console.log("error", error);
      dispatch(failledToLoadData());
    }
  };
