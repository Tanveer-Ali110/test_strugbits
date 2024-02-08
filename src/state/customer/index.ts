import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer, CustomerState } from "state/types";

const initialState: CustomerState = {
  customers: [],
  isLoading: false,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    startLoadData: (state) => {
      return { ...state, isLoading: true };
    },
    addCustomer: (state, action: PayloadAction<{ customer: Customer }>) => {
      const { customer } = action.payload;
      state.customers.push(customer);
    },
    editCustomer: (
      state,
      action: PayloadAction<{ editCustomer: Customer }>
    ) => {
      const { editCustomer } = action.payload;
      console.log("editCustomer", editCustomer);
      return {
        ...state,
        customers: state.customers.map((customer) => {
          if (customer._id === editCustomer._id) {
            return editCustomer;
          }
          return customer;
        }),
      };
    },
    loadCustomersData: (
      state,
      action: PayloadAction<{ customers: Customer[] }>
    ) => {
      const { customers } = action.payload;
      return { ...state, customers: customers.map((c) => c) };
    },
    deleteCustomer: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer._id.toString() !== id
        ),
      };
    },
    stopLoadData: (state) => {
      return { ...state, isLoading: false };
    },
    failledToLoadData: (state) => {
      return { ...state, isLoading: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  reset,
  addCustomer,
  editCustomer,
  loadCustomersData,
  startLoadData,
  deleteCustomer,
  stopLoadData,
  failledToLoadData,
} = customerSlice.actions;

export default customerSlice.reducer;
