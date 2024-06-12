import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { Container, Form, Button } from 'react-bootstrap';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password || !email) {
      setError('Username and password are required');
      return false;
    }
    setError('');
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
  
    const formDetails = new URLSearchParams();
    formDetails.append('username', username);
    formDetails.append('email', email);
    formDetails.append('password', password);
    formDetails.append('confirmpassword', confirmpassword);
  
    try {
      const response = await fetch('http://localhost:5173/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDetails,
      });

      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        navigate('/protected');
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Authentication failed!');
      }
      
     } catch (error) {
        setLoading(false);
        setError('An error occurred. Please try again later.');
      }
  };


  return (
    <div className="register-background">
      <Container className="register-container">
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
          <div className="bg-white p-3 rounded w-25">
            <h2>Sign-Up</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Username" className="form-control" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Password" className="form-control" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Confirm password" className="form-control" />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100 rounded-0">
                Sign up
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Register;