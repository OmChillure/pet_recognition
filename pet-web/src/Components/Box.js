import React from 'react'
import Style from '../Stylesheets/Box.module.css'

function Box() {
  return (
    <div className={Style.container}>
      <div className={Style.Box1}>
        <div className={Style.Emptybox} >
        </div>
        <h3 className={Style.h3}>Shop1</h3>
        <p className={Style.para}> 
        </p>
      </div>

      <div className={Style.Box2}>
      <div className={Style.Emptybox} >
      </div>

      <h3 className={Style.h3}>Shop2</h3>
      <p className={Style.para}>
      </p>
      </div>

      <div className={Style.Box3}>
      <div className={Style.Emptybox}>
      </div>
      <h3 className={Style.h3}>Shop3</h3>
        <p className={Style.para}>
            
        </p>
      </div>
    </div>
  )
}

export default Box
