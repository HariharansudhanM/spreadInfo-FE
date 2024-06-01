import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosService from "../Utils/AxiosService";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Error from "../Components/Error";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("User");
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState("");

  const Navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleCountry(e) {
    setCountry(e.target.value);
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handleRole(e) {
    setRole(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const request = {
      id: 5,
      Email: email,
      Password: password,
      Role: role,
      Country: country,
      Name: name,
    };
    console.log(request);

    try {
      const res = await axios.post(
        "http://localhost:5000/users/register",
        request
      );
      if (res.status == 200) {
        Navigate("/home");
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setError(() => error.response.data.message);
      setFlag(() => true);
    }
  }

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Role</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={role}
            onChange={handleRole}
          >
            <option value={"User"}>User</option>
            <option value={"Admin"}>Admin</option>
          </Form.Select>

          <Form.Text className="text-muted">
            Admin role requires authorization from existing Admin. You will be
            notified once after Administators action. Stay tuned!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country name"
            name="Country"
            value={country}
            onChange={handleCountry}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleName}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        {flag && <Error error={error} />}
      </Form>
      <Footer />
    </>
  );
}

export default Register;
