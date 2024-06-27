import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate, Link } from 'react-router-dom';
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
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
<<<<<<< HEAD
    if (!username || !password || !email) {
      setError('Username and password are required');
=======
    if (!username || !password || !email || !confirmpassword) {
      setError('All fields are required');
      return false;
    }
    if (password !== confirmpassword) {
      setError('Passwords do not match');
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
      return false;
    }
    setError('');
    return true;
  };
<<<<<<< HEAD
=======

>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
<<<<<<< HEAD
  
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
=======

    const formDetails = {
      username,
      email,
      password,
      confirmpassword
    };

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
      });

      setLoading(false);
      if (response.ok) {
<<<<<<< HEAD
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


=======
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Registration failed!');
      }
    } catch (error) {
      setLoading(false);
      setError('An error occurred. Please try again later.');
    }
  };

>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
  return (
    <div className="register-background">
      <Container className="register-container">
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
          <div className="bg-white p-3 rounded w-25">
            <h2>Sign-Up</h2>
<<<<<<< HEAD
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
=======
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              {error && <p className="text-danger">{error.toString()}</p>}
              <Button variant="success" type="submit" className="w-100 rounded-0" disabled={loading}>
                {loading ? 'Signing up...' : 'Sign up'}
              </Button>
              <div className="signin-link">
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
              </div>
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Register;