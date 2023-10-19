import React, { useState } from 'react'

export default function useForm(initialState) {
    
    const [form, setForm] = useState(initialState)

    const onChange = (e) =>{
        // console.log(e.target)
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const clearFields = () =>{
      setForm(initialState)
    }
  return {form, onChange, clearFields}
}