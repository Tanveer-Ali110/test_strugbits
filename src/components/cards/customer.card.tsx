import { useState } from "react";
import { DeleteModel } from "../Models/delete.Model";
import { EditModel } from "../Models/edit.Model";
import { Customer } from "state/types";
import { IMAGE_URL } from "config/environments";

interface Iprops {
  customer: Customer;
}
export const CustomerCard: React.FC<Iprops> = ({ customer }) => {
  const [showEdit, setShowEdit] = useState(false);
  const toggleEditModel = () => setShowEdit(!showEdit);

  const [showDelete, setShowDelete] = useState(false);
  const toggleDeleteModel = () => setShowDelete(!showDelete);
  return (
    <div className="line_container">
      <div className="line_content">
        <div className="image">
          <img
            src={`${IMAGE_URL}${customer.profile_picture}`}
            alt="profile_picture"
            width="30px"
          />
        </div>
        <div className="lineCenter_Content">
          <div className="usename">{customer.user_name}</div>
          <div className="Custome_Name">{customer.name}</div>
          <div className="Email">{customer.email}</div>
        </div>
        <div className="line_button">
          <button className="edit_button button" onClick={toggleEditModel}>
            Edit
          </button>
          <button className="delete_button button" onClick={toggleDeleteModel}>
            Delete
          </button>
        </div>
      </div>
      <EditModel customer={customer} show={showEdit} toggleModel={toggleEditModel} />
      <DeleteModel customer={customer} show={showDelete} toggleModel={toggleDeleteModel} />
    </div>
  );
};
