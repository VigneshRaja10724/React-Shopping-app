import { useState } from "react";
import { Container, Col, Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { login } from "../../Data/Http";
import { AuthResponse } from "../../Model/AuthResponce";

const Login = (props : any) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const singIn = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(user, password);
    login({
      username : user,
      password : password
    }).then((responce : AuthResponse) => {
      console.log(responce.expirationDate, responce.userId, responce.jwt)
      props.showLogin(responce.jwt);
    })
  };

  const singUp = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setShow(true);
  };
  return (
    <Container className="justify-content-md-center">
      <Form>
        <Col md={{ span: 4, offset: 3 }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontWeight: "bold" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 3 }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 3 }}>
          <Button variant="success" onClick={singIn}>
            Sing In
          </Button>{" "}
          <Button variant="primary" onClick={singUp} type="submit">
            Sing Up
          </Button>
        </Col>
      </Form>

      <Modal show={show} >
        <Modal.Header >
          <Modal.Title>User Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  placeholder="Your name"/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput3"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  placeholder="New Password"/>
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Login;
