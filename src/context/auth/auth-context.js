import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const AuthContext = createContext({
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  user: {},
});

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (firstName, lastName, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await addDoc(collection(db, 'users'), {
        displayName: `${firstName} ${lastName}`,
        emailAddress: email.toLowerCase(),
        dateCreated: Date.now(),
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  return { login, signup, user, logout };
};

export { AuthProvider, useAuth };
