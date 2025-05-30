import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { certificates } from '../assets/assets';
import { universities } from '../assets/assets';
import { companies } from '../assets/assets';
import { projects } from '../assets/assets';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const navigate = useNavigate();

    const value = {
        navigate, certificates, universities, companies, projects
    }
  return (
    <AuthContext.Provider value={value}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider