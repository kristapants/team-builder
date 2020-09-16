import React, { useState } from 'react'

const initialMemberValues = {
  fName: '',
  lName: '',
  jobTitle: '',
  specialSkill: '',
}

export default function AddMember(props) {

  const [formValues, setFormValues] = useState(initialMemberValues)
  
  const onSubmit = evt => {
    debugger
    evt.preventDefault()
    props.submit(formValues)
    setFormValues(initialMemberValues)
  }

  const onChange = evt => {
    const {name, value} = evt.target
    setFormValues({ ...formValues, [name]: value.trim()})
  }

  return (
    <div>
      <form className='form container' style={{marginLeft: '0'}} onSubmit={(e)=>{onSubmit(e)}}>
        <div className='form-group inputs'>
          <label>Who's Joining Our Team?
            <div>
              <input
                type='text'
                name='fName'
                onChange={onChange}
                placeholder='First name'
              />
              <span>   </span>
              <input
                type='text'
                name='lName'
                onChange={onChange}
                placeholder='Last name'
              />
            </div>
          </label>

          <div>
            <label>What will they do?
              <div>
                <input
                  type='text'
                  name='jobTitle'
                  onChange={onChange}
                  placeholder='Job title'
                />
              </div>
            </label>
          </div>

          <div>
            <label>Anything special we should know?
              <div>
                <input
                  type='text'
                  name='specialSkill'
                  onChange={onChange}
                  placeholder='Special skills or hobby'
                />
              </div>
            </label>
          </div>

          <div>
            <button type='submit'>submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
