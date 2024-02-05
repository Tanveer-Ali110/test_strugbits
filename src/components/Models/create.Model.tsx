import { useRef, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useCreateCustomer } from "../../formik";

interface Iprops {
  show: boolean;
  toggleModel: () => void;
}
export const CreateModel = ({ show, toggleModel }: Iprops) => {
  const [fileName, setFileName] = useState("");

  const { setFieldValue, handleSubmit, handleChange, errors, touched } =
    useCreateCustomer();

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
            Add New Customer
          </Modal.Title>
        </div>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="create_main">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              name="username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </InputGroup>
          {touched.username && errors.username && <div>{errors.username}</div>}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Customer Name"
              name="name"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </InputGroup>
          {touched.name && errors.name && <div>{errors.name}</div>}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email"
              name="email"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </InputGroup>
          {touched.email && errors.email && <div>{errors.email}</div>}
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
                setFileName(event.currentTarget.files[0]?.name);
                console.log(
                  "Selected File Name:",
                  event.currentTarget.files[0]?.name
                );
              }}
            />
            <p className="mx-3">{fileName}</p>
          </InputGroup>
          {touched.profilePhoto && errors.profilePhoto && (
            <div>{errors.profilePhoto}</div>
          )}
          <Button type="submit" className="create_button">
            ADD CUSTOMERS
          </Button>
        </Modal.Body>
      </Form>
    </Modal>
  );
};
