import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate, Link } from 'react-router-dom';
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
import './Login.css';
import { Container, Form, Button } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
<<<<<<< HEAD
    if (!username || !password || !email) {
=======
    if (!username || !password) {
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
      setError('Username and password are required');
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
  
    try {
      const response = await fetch('http://localhost:5173/token', {
=======

    const formDetails = new URLSearchParams();
    formDetails.append('username', username);
    formDetails.append('password', password);

    try {
      const response = await fetch('http://localhost:8000/token', {
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
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
<<<<<<< HEAD
      
     } catch (error) {
        setLoading(false);
        setError('An error occurred. Please try again later.');
      }
  };


=======
    } catch (error) {
      setLoading(false);
      setError('An error occurred. Please try again later.');
    }
  };

>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
  return (
    <div className="login-background">
      <Container className="login-container">
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
          <div className="bg-white p-3 rounded w-25">
            <h2>Sign-In</h2>
<<<<<<< HEAD
            <Form>
              <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Username" className="form-control" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Password" className="form-control" />
=======
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
              </Form.Group>
              <Button variant="success" type="submit" className="w-100 rounded-0">
                Log in
              </Button>
<<<<<<< HEAD
              <space>    </space>
              <div class="signup-link">
            <p>You don't have an account? <a href="signup.html">Sign up</a></p>
        </div>
=======
              <div className="space"></div>
              <div className="signup-link">
              <p>Don't have an account? <Link to="/register">Sign up</Link></p>              </div>
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
