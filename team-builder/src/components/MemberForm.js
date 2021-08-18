import React from 'react';

const MemberForm = props => {

    const { values, update, submit } = props;

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        update( name, value );
        console.log(values);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
    <form className = 'form' onSubmit = { onSubmit }>
        <div className = 'inputs'>
            <label>Username: 
                <input 
                    type = 'text'
                    name = 'username'
                    value = { values.username }
                    placeholder = 'username'
                    maxLength = '30'
                    onChange = { onChange }
                />
            </label><br />

            <label>Email: 
                <input 
                    type = 'email'
                    name = 'email'
                    value = { values.email }
                    placeholder = 'email'
                    maxLength = '30'
                    onChange = { onChange }
                />
            </label><br />

            <label>Role: 
                <select value = { values.role } name = 'role' onChange = { onChange }>
                    <option value = ''>-- Select a Role --</option>
                    <option value = 'BE'>Backend Engineer</option>
                    <option value = 'FE'>Frontend Engineer</option>
                    <option value = 'designer'>Designer</option>
                    <option value = 'DA'>Data Analyst</option>
                    <option value = 'TL'>Tech Lead</option>
                </select>
            </label>
            <div className = 'submit'>
                <button>submit</button>
            </div>
        </div>
    </form>
    )
}

export default MemberForm;