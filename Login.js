import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCcp0Ek55GbUs44rgUW2eQrA41YvQYoDBg",
    authDomain: "proyectodiego-c1f68.firebaseapp.com",
    projectId: "proyectodiego-c1f68",
    storageBucket: "proyectodiego-c1f68.appspot.com",
    messagingSenderId: "104214210307",
    appId: "1:104214210307:web:c262969175375bbebdeb36"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  const provider = new FacebookAuthProvider();


  const Login = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    
  

  useEffect (()=> {
    if (!firebase.apps.length){
      initializeApp(firebaseConfig);
    }
  },[]);

  const handleLogin = async () =>{
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('Bienvenida BubuRufus');
      console.log('Inicio de sesión exitoso:', response.user);
    } catch(error){
        alert('Usuario y/o contraseña inválidos');
        console.error('Error durante el inicio de sesión:', error.message);
    }
  }

    const signInWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      alert('Inicio de sesión en Google exitoso');
      // El usuario ha iniciado sesión con éxito, puedes redireccionar a la página de bienvenida o hacer otras operaciones.
    } catch (error) {
      // Manejar errores de inicio de sesión.
      console.error("Error al iniciar sesión con Google:", error.message);
    }
    };

    const signInWithFacebook = async () => {
      try {
        const provider = new firebase.auth.FacebookAuthProvider();
        await auth.signInWithPopup(provider);
        alert('Inicio de sesión en Facebook exitoso');
        // El usuario ha iniciado sesión con éxito, puedes redireccionar a la página de bienvenida o hacer otras operaciones.
      } catch (error) {
        // Manejar errores de inicio de sesión.
        console.error("Error al iniciar sesión con Facebook:", error.message);
      }
      };
    
    



   
  return (
    <div>
      <h2>Login</h2>
      <label>Email</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <label>Password:</label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <button className='my-button' onClick={handleLogin}>Login</button>

      <br/>
      <h2>Log in with Google</h2>
      <button className='my-button' onClick={signInWithGoogle}>Log in with Google</button>

      <br/>
      <h2>Log in with Facebook</h2>
      <button className='my-button' onClick={signInWithFacebook}>Log in with Facebook</button>


    </div>
  );
};

export default Login;







