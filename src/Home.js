import React,{useState,useEffect} from 'react';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

export default function Home({user}) {

  if (sessionStorage.getItem("user")==null) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      Home
      <Link to="/logout">Logout</Link>
    </div>
  )
}
