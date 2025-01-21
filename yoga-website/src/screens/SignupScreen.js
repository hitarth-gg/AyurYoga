import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtBxjIny77gf1WsYwjJIqxYw3_J0xM-_A",
  authDomain: "webproject-af0d4.firebaseapp.com",
  projectId: "webproject-af0d4",
  storageBucket: "webproject-af0d4.firebasestorage.app",
  messagingSenderId: "970496237670",
  appId: "1:970496237670:web:bfdee592292dcb536f0da7",
  measurementId: "G-56KC68YN4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px 30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  heading: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    marginTop: '10px',
    color: '#3498db',
    textDecoration: 'none',
  },
};

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create a new user in Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful! Please login.');
      navigate('/login'); // Redirect to the login screen
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.message); // Show error message to the user
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSignup}>
        <h2 style={styles.heading}>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>Sign Up</button>
        <Link to="/login" style={styles.link}>Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default SignupScreen;
