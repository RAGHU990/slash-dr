/*import {useEffect, useState} from "react";

function Patient() {

useEffect(() => {
  const url = "https://jsonblob.com/1055903745329872896";
  fetch(url)
    .then(res => {
      if (!res.ok) {
        return Error("Problem in fetching photo url");
      }
      return res.blob();
    })
		}, []);

return(
<div>
  <h1>hello</h1>
</div>

)
}
export default Patient; */
import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

const Patient = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://jsonblob.com/api/jsonBlob/1055903745329872896')
    //   .then(response => response.json())
    //   .then(items => setData(items))
    //   .catch(error => console.error(error))

      async function fetchAppointments() {
        const response = await fetch('https://jsonblob.com/api/jsonBlob/1055903745329872896');
        const fetchAppointments = await response.json();
        setData(fetchAppointments);
        console.log('read data: ',fetchAppointments)
      }
      fetchAppointments();

  },[]);

  return (
    <div>
      { data.result && data.result.length > 0 ?  data.result.map(items => (
        <div   class="card-body"key={items.appointment_id}>
          <p class="card-text">Date: {items.date}</p>
          <p class="card-text">Doctor: {items.doctor}</p>
          <p class="card-text">Appointment ID: {items.appointment_id}</p>
          {items.summary.map(note => (
            <div key={note.id}>
              <p class="card-title">{note.title}: {note.content}</p>
            </div>
          ))}
          
          
       
        </div>
        
      )) : 'no data fetched'}
      <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
</div>
    </div>
    

  );
};

export default Patient;

