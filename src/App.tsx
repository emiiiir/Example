import React from 'react';
import { useState } from "react";
import './App.scss';
import '../node_modules/bootstrap/';
import Login from './components/Login/Login';
import GuestList from './components/GuestList/GuestList';
import ApiEnitiesList from './components/ApiEnitiesList/ApiEnitiesList';
import NewApiEntry from './components/NewApiEntry/NewApiEntry';
import ApiEntiry from './models/ApiEntiry';

function App() {
  //מערך של אתרים
  const [listApi,setListApi]=useState<ApiEntiry[]>([]);

  const addNewApi=(api:ApiEntiry)=>{
    listApi.push(api);
    setListApi([...listApi])
  }

  return <div style={{backgroundColor:'beige'}}>
    {/* //הסבר חזרה על useRef  */}
    {/* //input dinamy/ */}
    {/* <div className=' col-sm-6'>
      <ApiEnitiesList></ApiEnitiesList>
    </div>

    <div className='col-sm-6'>
  <GuestList></GuestList>
    </div> */}

    
  <div className='row'>
    <div className='col-sm-6'>
        <h3>my api list</h3>
        <ul>
          {listApi.map((api) => {
            return <li>{api.Api}</li>
          })}
        </ul>
     
    </div>
    <div className='col-sm-6'>
    <NewApiEntry funcParentAdd={addNewApi}>אתר חדש</NewApiEntry>
    </div>
  </div>
   
  </div>;
}

export default App;
