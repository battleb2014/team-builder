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
  const [ formValues, setFormValues ] = useState(initialValues);
  const [ error, setError ] = useState('');

  const updateForm = ( inputName, inputValue ) => {
    setFormValues({ ...formValues, [ inputName ]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newMember.username || !newMember.email || !newMember.role) {
      setError('Please fill in all inputs correctly');
      return;
    }

    setMembers(newMember);
    setFormValues(initialValues);
    console.log(members);
    console.log(formValues);
  }

  return (
    <div className="App">
      <h1>Members List</h1>
      <h3 className = 'error'>{ error }</h3>
      <MemberForm 
        values = { formValues }
        update = { updateForm }
        submit = { submitForm }
      />

      {
        members.map(( member, index ) => {
          return (
            <Member 
              key = { index } 
              info = { member }
            />
          )
        })
      }
    </div>
  );
}

export default App;
