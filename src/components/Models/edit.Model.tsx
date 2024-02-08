import { useEditCustomer } from "formiks";
import { useRef } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

interface Iprops {
  customer: any;
  show: boolean;
  toggleModel: () => void;
}
export const EditModel = ({ customer, show, toggleModel }: Iprops) => {
  const { values, setFieldValue, handleSubmit, handleChange, errors, touched } =
    useEditCustomer(toggleModel, customer);
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <Modal show={show} onHide={toggleModel} className="create_model">
      <Modal.Header className="create_header">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            width: "100%",
          }}
        >
          <Modal.Title
            style={{
              display: "flex",
              justifyContent: "end",
              color: "#fff",
              position: "relative",
              top: "7px",
              right: "33px",
              cursor: "pointer",
            }}
            onClick={toggleModel}
          >
            x
          </Modal.Title>
          <Modal.Title
            style={{
              textAlign: "center",
              color: "#fff",
              padding: "0 0 1rem 0",
            }}
          >
            EDIT CUSTOMER
          </Modal.Title>
        </div>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="create_main">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              value={values.username || ""}
              name="username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </InputGroup>
          {touched.username && errors.username && (
            <div className="text-danger">{errors.username}</div>
          )}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Customer Name"
              name="name"
              value={values.name || ""}
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </InputGroup>
          {touched.name && errors.name && (
            <div className="text-danger">{errors.name}</div>
          )}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email"
              name="email"
              value={values.email}
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </InputGroup>
          {touched.email && errors.email && (
            <div className="text-danger">{errors.email}</div>
          )}
          <InputGroup className="mb-3 d-flex flex-direction-row">
            <span
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#57BC90",
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              Upload File
            </span>
            <Form.Control
              type="file"
              name="profilePhoto"
              ref={fileInputRef}
              aria-describedby="basic-addon1"
              style={{ display: "none" }}
              onChange={(event: any) => {
                setFieldValue("profilePhoto", event.currentTarget.files[0]);
              }}
            />
            <p className="mx-3">
              {typeof values.profilePhoto === "string"
                ? values.profilePhoto.split("-")[1]
                : (values.profilePhoto as any).name}
            </p>
          </InputGroup>
          {touched.profilePhoto && errors.profilePhoto && (
            <div className="text-danger">{errors.profilePhoto}</div>
          )}
          <Button type="submit" className="create_button">
            EDIT CUSTOMER
          </Button>
        </Modal.Body>
      </Form>
    </Modal>
  );
};
