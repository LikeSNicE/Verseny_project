import React,{useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../..';


const Logout = () => {

  const {Authstore} = useContext(Context)

  useEffect(() => {
    Authstore.logout();
    
  },[])
};

export default Logout;