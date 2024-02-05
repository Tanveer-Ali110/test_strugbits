import { useState } from "react";
import "./Main.css";
import Sign_in from "../../images/Sign In/Sign In.png";
import { CreateModel } from "../Models/create.Model";
import { EditModel } from "../Models/edit.Model";
import { DeleteModel } from "../Models/delete.Model";
import { CustomerCard } from "../cards/customer.card";
// import Pic from "../../images/hispanic-young-entrepreneur-his-office-desk-working-making-packages-with-fashion-clothes-ship-their-customers (1)/hispanic-young-entrepreneur-his-office-desk-working-making-packages-with-fashion-clothes-ship-their-customers (1).png";

const Main = () => {
  const [showCreate, setShowCreate] = useState(false);
  const toggleCreateModel = () => setShowCreate(!showCreate);

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
        {[1, 2, 3, 4, 5].map(() => {
          return <CustomerCard />;
        })}
        <CreateModel show={showCreate} toggleModel={toggleCreateModel} />
      </div>
    </div>
  );
};

export default Main;
