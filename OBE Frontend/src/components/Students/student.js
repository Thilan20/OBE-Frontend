import React from 'react'
import Logo from './logo.jpg';
const Student = () => {
  return (
    <div>
        <div class= "header">

                         <img src={Logo} alt ='weblogo' />
                        <h1>Faculty of Engineering University of Ruhuna</h1>
                        <h2>Outcome Based Education System</h2>
                    </div>

      <div className="container">
        <h3 className="center">Student</h3>
        <h4>Students registered on database</h4>
      </div>
    </div>
  )
}

export default Student