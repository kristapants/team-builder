import React, { useState, useEffect } from 'react'
import './App.css';
import AddMember from './components/AddMember'
import Team from './components/Team'
import axios from '../src/axios'


function App() {

  const [team, setTeam] = useState([])

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeam(res.data))
  }, [])

  const submitForm = ( newMember ) => {

    if (!newMember.fName || !newMember.lName || !newMember.jobTitle) {
      return
    }
    axios.post('fakeapi.com', newMember)
      .then(res => {
        setTeam([ res.data, ...team ])
      })
      .catch(err => {
        debugger
      })
  }

  return (
    <div>
      <h1>Team Builder</h1>
      <AddMember 
        submit={submitForm}
      />
      <Team 
        about={team}
      />
    </div>
  );
}

export default App;
