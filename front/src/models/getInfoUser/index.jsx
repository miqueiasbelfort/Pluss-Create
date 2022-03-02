import {MaxContainer} from "./style"
import { useState } from "react"
import {FaArrowRight} from "react-icons/fa"
//import { Button } from "../PageLogin/styles"
import Logo from "../PageLogin/assents/Pluss+Class_Logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap
import {Button, Form, Group, Label, Control, Text, Check} from "bootstrap"

export default function GetInfoUser(){

    
    const [valueInputOption, setValueInputOption] = useState()

    return (
      <MaxContainer>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </MaxContainer>
    );
}