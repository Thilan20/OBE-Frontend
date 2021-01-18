import React from 'react'
import Logo from './logo.jpg';
const Lecturer = () => {
  return (
    <div>
        <div class= "header">

                         <img src={Logo} alt ='weblogo' />
                        <h1>Faculty of Engineering University of Ruhuna</h1>
                        <h2>Outcome Based Education System</h2>
                    </div>
        
      <div class="col-md-3 offset-md-9  "  align="right">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit">Submit</button>
        </div>

        <div class ="title">
            <h2> Department of Electrical and Information Engineering</h2>
            <h3>Cousrse assigned by Head of the Department</h3>
        </div>



      <div className="container">
        <h3 className="center">Lecturer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </div>
    </div>
  )
}

export default Lecturer