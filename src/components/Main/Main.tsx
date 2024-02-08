import { useState } from "react";
import "./Main.css";
import Sign_in from "../../images/Sign In/Sign In.png";
import { CreateModel } from "../Models/create.Model";
import { CustomerCard } from "../cards/customer.card";
import { useCustomer } from "state/hooks";
import { Customer } from "state/types";

const Main = () => {
  const [showCreate, setShowCreate] = useState(false);
  const toggleCreateModel = () => setShowCreate(!showCreate);

  const {customers, isLoading } =useCustomer()

  return (
    <div className="Main">
      <div className="navbar">
        <h1 className="Navbar_h1">CUSTOMER</h1>
      </div>
      <div className="Center_content">
        <button className="Main_button" onClick={toggleCreateModel}>
          <img src={Sign_in} alt="" style={{width:"12px"}}/>
          <span className="button_content">Add New Customers</span>
        </button>
      </div>
      <div className="bottom_content">
        <div className="green_content">
          <div className="main_container">
            <div className="main_content">
              <span>Username</span>
              <span>Customer Name</span>
              <span>Email</span>
            </div>
          </div>
        </div>
        {customers && customers.map((customer:Customer ,key:number) => {
          return <CustomerCard customer={customer} key={key}/>;
        })}
        <CreateModel show={showCreate} toggleModel={toggleCreateModel} />
      </div>
    </div>
  );
};

export default Main;
