import { useState } from "react";
import { DeleteModel } from "../Models/delete.Model";
import { EditModel } from "../Models/edit.Model";
import Pic from "../../images/customers icon/customers icon.png"

export const CustomerCard = () => {

  const [showEdit, setShowEdit] = useState(false);
  const toggleEditModel = () => setShowEdit(!showEdit);

  const [showDelete, setShowDelete] = useState(false);
  const toggleDeleteModel = () => setShowDelete(!showDelete);

  return (
    <div className="line_container">
      <div className="line_content">
        <div className="image"><img src={Pic} alt="" /></div>
        <div className="lineCenter_Content">
          <div className="usename">jordan142</div>
          <div className="Custome_Name">Jordan Joseph</div>
          <div className="Email">randomemail@gmail.com</div>
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
      <EditModel show={showEdit} toggleModel={toggleEditModel} />
      <DeleteModel show={showDelete} toggleModel={toggleDeleteModel} />
    </div>
  );
};
