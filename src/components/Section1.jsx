
import "../styles/Section1.scss"

import React, { useState } from 'react'

export default function Section1() {

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
     {console.log(state)} 
                <div className='container'>
                    <div className="row boxes mt-5">
                        <div className="col-md-6">
                            <h1 className='h100'>
                                Grant asosida
                                <br />
                                o‘qishga kirishni
                                <br />
                                xohlaysizmi?
                            </h1>

                            <p className='p-2'>
                                91% O‘quvchilarimiz Talaba bo‘lishdi
                            </p>
                        </div>
                        <div className="col-md-6 mt-3">
                            <img className='w-75' src="./image/hat.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div className='container free45'>

                    <div>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            BEPUL BOSHLASH
                        </button>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">BEPUL BOSHLASH</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form action="/telegram.php" method="POSt" onSubmit={handleSubmit}>
                                        <div className="modal-body">
                                            <div className='f-form'>
                                                <div className=" t-input-block mb-2 me-2 w-100">
                                                    <input required onChange={handleInput} type="text"  autoComplete='name' name='Name'
                                                        className='t-input pt-2 pb-2 w-100 px-2'
                                                        placeholder='Familiya va Ism'
                                                    />
                                                </div>
                                                <div className="t-input-block pt-2 pb-2 w-100">
                                                    <input required onChange={handleInput} type="tel" autoComplete='tel' name='phoneNumber'
                                                        className='t-input  w-100 pt-2 pb-2'
                                                        placeholder='+998 99 123 45 67'
                                                    />
                                                </div>
                                                <div className="t-input-block mb-2">
                                                    <select required onChange={handleInput} className="form-select wrapper pt-2 pb-2" name="fanlar" aria-label="Default select example">
                                                        <option>Kursni tanlang</option>
                                                        <option value="1">Matematika</option>
                                                        <option value="2">Ingliz tili</option>
                                                        <option value="3">Kimyo</option>
                                                        <option value="4">Biologiya</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="sumbit" className="btn btn-primary">  Darslarga yozilish</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='tn-atom'><p>1-dekabrgacha 25% chegrima</p></div>

                </div>

                <div className='box d-flex d-block' >
                    <div className='container text-center'>
                        <strong className='free1'>Biz haqimizda raqamlarda</strong>
                        <div className="d-flex boxes">
                            <div className="gujiferri col-md-4 me-5">
                                <img className='img1' src="/image/Matem.svg" alt="not found" />
                                <img className='img2' src="/image/Ingliz.svg" alt="not found" />
                                <img className='img3' src="/image/Biolog.svg" alt="not found" />
                                <img className='img4' src="/image/Ximiya.svg" alt="not found" />
                                <div className="box1 ">
                                    Записаться на пробный урок
                                </div>
                            </div>
                            <div className="free me-5">
                                <div> <h2>900+</h2></div>
                                <div ><p className='p-1'>O‘quvchilar</p></div>
                            </div>
                            <div className="free me-5">
                                <h2>5+</h2>
                                <p className='p-1'>yillik tajriba</p>
                            </div>
                            <div className="free">
                                <h2>91%</h2>
                                <p className='p-1'>O‘quvchilarimiz talaba bo‘lishdi</p>
                            </div>
                        </div>

                    </div>
                </div>

    </div>
  )
}
