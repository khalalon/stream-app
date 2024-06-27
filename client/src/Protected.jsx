import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import NavBar from './Layout/Navbar';
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19

function ProtectedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
<<<<<<< HEAD
        const response = await fetch(`http://localhost:5173/verify-token/${token}`);
        
=======
        const response = await fetch(`http://localhost:8000/verify-token/${token}`);

>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
        if (!response.ok) {
          throw new Error('Token verification failed');
        }
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    verifyToken();
  }, [navigate]);

<<<<<<< HEAD
  return <div>Protected Content</div>;
=======
  return (

      <div>Protected Content</div>
   
  );
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
}

export default ProtectedPage;