import { Button, Modal } from "react-bootstrap";
import delete_icon from "../../images/delete_icon/icon.png";

interface Iprops {
  show: boolean;
  toggleModel: () => void;
}
export const DeleteModel = ({ show, toggleModel }: Iprops) => {
  return (
    <div className="delete_model">
      <Modal show={show} onHide={toggleModel}>
        {/* <Modal.Header closeButton className="delete_header">
          <Modal.Title>
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="delete_body">
          <div className="delete_body_content">
            <img src={delete_icon} alt="" />
            <div style={{fontWeight:"bolder"}}>Are you sure?</div>
            <div style={{padding:"2rem",textAlign:"center",fontWeight:"500"}}>
              Do you really want to delete this customer?
              <div> This process can not
              be undone.</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="delete_footer">
          <Button variant="secondary" onClick={toggleModel} className="delete_cancel">
            Close
          </Button>
          <Button variant="primary" onClick={toggleModel} className="delete_save">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
