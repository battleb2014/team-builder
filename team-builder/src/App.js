import React, { useState } from 'react';
import MemberForm from './components/MemberForm';
import Member from './components/Member';
import './App.css';

const initialValues = {
  username: '',
  email: '',
  role: ''
}

function App() {
  const [ members, setMembers ] = useState([]);
  const [ formValue, setFormValue ] = useState(initialValues);
  const [ error, setError ] = useState('');

  const updateForm = ( inputName, inputValue ) => {
    setFormValue({ ...formValue, [ inputName ]: inputValue })
  }

  const submitForm = () => {
    const newMember = {
      username: formValue.username.trim(),
      email: formValue.email.trim(),
      role: formValue.role.trim()
    }

    if(!newMember.username || !newMember.email || !newMember.role) {
      setError('Please fill in all inputs correctly');
      return;
    }
  }

  return (
    <div className="App">
      <h1>Members List</h1>
      <MemberForm 
        values = { formValue }
        update = { updateForm }
      />

      {
        members.map(member => {
          return (
            <Member 
              key = { member.id } 
              info = { member } 
              onChange = { onchange }  
            />
          )
        })
      }
    </div>
  );
}

export default App;
