
import "../styles/Section8.scss"


import React from 'react'

export default function Section8() {
  return (
    <div>
   <div className='section8'>
              <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='h-2'>Manzil</h1>
                        <br />
                        <p className='p-8'><img className='img3' src="/image/phone2.webp" alt="not found" /> +998 55 500 34 34</p>
                        <p className='p-8'><img className='img3' src="/image/loca2.png" alt="not found" /> Amir Temur 86 | Yunusobod Tumani</p>
                        <p className='p-8'>Minor Metrosi Kazahstan binosi 1-qavati</p>
                        <p className='p-8'><img className='img3' src="/image/email2.png" alt="not found" />zohirjon0306@gmail.com</p>
                        <br />
                        {/* <div className="boxes12">
                            <div className="box4 ">
                                <a target="_blank" href="//www.facebook.com.GrandEdu"><img className='img2' src="/image/facebook.png" alt="not found" /></a>
                                <a className='ms-2' target="_blank" href="//www.facebook.com.GrandEdu"><img className='img2' src="/image/instagram.png" alt="not found" /></a>
                                <a className='ms-2' target="_blank" href="//www.facebook.com.GrandEdu"><img className='img2' src="/image/telegram.png" alt="not found" /></a>
                                <a className='ms-2' target="_blank" href="//www.facebook.com.GrandEdu"><img className='img2' src="/image/youtube.png" alt="not found" /></a>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-6 mt-4" >
                        {/* <YMaps >
                            <div className='Map'> 
                                <Map 
                                defaultState={{
                                    center: [41.328928, 69.283015],
                                    zoom: 13,                                  
                                }}
                                >
                                    <Placemark geometry={[41.328928, 69.283015]}/>
                                    <FullscreenControl options={{float: 'left'}}/>
                                    <TypeSelector options={{ float: "right" }} />
                                </Map>
                            </div>
                        </YMaps> */}
                    </div>
                </div>
              </div>
            </div>
    </div>
  )
}
