import React from 'react'
import Logo from './logo.jpg';
import Gate from './gate.jpg'
import Avatar from './img_avatar.png'
const Login = () => {
  return (
    <div>
        <div class= "header">

                         <img src={Logo}    alt ='weblogo' />
                        <h1>Faculty of Engineering University of Ruhuna</h1>
                        <h2>Outcome Based Education System</h2>
                    </div>
        

        <div class ="title">
            <h2>Login Page</h2>
            <div class="row">
                <div class="column ">
                   
                        <form action="" method="post">

                                <div class="imgcontainer">
                                    <img src={Avatar} alt="Avatar" class="avatar"/>
                                </div>

                                <div class="container">
                                    <label for="uname"><b>Username</b></label>

                                    <input type="text" placeholder="Enter Username" name="uname" required/>

                                    <label for="psw"><b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="psw" required/>
                                        
                                    <button type="submit">Login</button>
                                   
                                </div>

                                <div class="container" >
                                    <button type="button" class="cancelbtn">Cancel</button>
                                    
                                </div>
                            </form>


                </div>
                <div class="column "  >
                    <img src={Gate}  class ="image"  height="340" width=" 650"alt ='gatelogo' />
                </div>
            </div>    
        </div>



    </div>
  )
}

export default Login