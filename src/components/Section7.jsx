
import "../styles/Section7.scss"

import React, { useState } from 'react'

export default function Section7() {

    const initalState = {firstName:"", lastName:"", phoneNumber:"", fanlar:""}
    const [state, setState] = useState(initalState)

    const handleInput = e =>{
        const {name, value} = e.target;
        setState({ ...state, [name]:value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
    }

  return (
    <div>
        {/* {console.log(state)} */}
              <div className="section7">
                    <div className="container text-center">
                        <strong className='free1'>Bepul Darslarga
                            Ro‘yxatdan o‘ting
                            va 25% chegrimaga ega bo‘ling!</strong>
                        <p className='p-2 mt-3'>
                            Ma'lumotlaringizni qoldiring va adminstratorlarimiz siz </p>
                        <p className='p-5'> bilan bog‘lanishadi.</p>
                        <form action="/telegram.php" onSubmit={handleSubmit}> 
                            <div className='f-form'>       
                            <div className=" t-input-block mb-2 me-2">
                                    <input required onChange={handleInput} type="text" autoComplete='name' name='Name'
                                        className='t-input'
                                        placeholder='Familiya va Ism'
                                    />
                                </div>
                                <div className="t-input-block mb-2 me-2">
                                    <input required onChange={handleInput} type="tel" autoComplete='tel' name='phoneNumber'
                                        className='t-input'
                                        placeholder='+998 99 123 45 67'
                                    />
                            </div>
                                <div className="t-input-block mb-2">
                                    <select required onChange={handleInput} name="fanlar" className="form-select wrapper" aria-label="Default select example">
                                        <option value>Kursni tanlang</option>
                                        <option value="1">Matematika</option>
                                        <option value="2">Ingliz tili</option>
                                        <option value="3">Kimyo</option>
                                        <option value="4">Biologiya</option>
                                    </select>
                            </div>
                            <div className='d-input w-100'>
                                <button type='sumbit' className='btn btn1 btn-primary cursor-pointer'> 
                                Darslarga yozilish
                                </button>
                            </div>
                       
                        </div></form>
                      
                    </div>
                </div>
    </div>
  )
}

