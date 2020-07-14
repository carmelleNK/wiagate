import React, {Component} from 'react';

class  Auth extends React.Component{
    render(){
        return(   
        <> 
        <div className="backgroundAuth">
        <div className="limiter">
                    <font face="Times New Roman" style={{ fontSize: "500%" , color:"rgb(253, 253, 253)", marginLeft:"1%" , marginTop: "1%" }} > WIAGATE</font>

            </div>
            <div className="container-login100" >			
                <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33" style={{opacity: "0.97"}}>          
                    <form className="login100-form validate-form flex-sb flex-w">          
                        <span className="login100-form-title p-b-53">		    
                            Login page
                        </span>

                        <div className="p-t-31 p-b-9">
                            <span className="txt1">
                                Username
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Username is required">
                            <input className="input100" type="text" name="username" />
                            <span className="focus-input100"></span>
                        </div>
                        
                        <div className="p-t-13 p-b-9">
                            <span className="txt1">
                                Password
                            </span>

                            <a href="/null" className="txt2 bo1 m-l-5">
                                Forgot?
                            </a>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" type="password" name="pass"/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button className="login100-form-btn">
                                Sign In
                            </button>
                        </div>
                        <div className="w-full text-center p-t-55">
                            <span className="txt2">
                                Not a member?
                            </span>

                            <a href="/SignIn" className="txt2 bo1">
                                Sign Up now
                            </a>
                        </div>
                    </form>
                </div>
                </div>
        </div>
            
        </>
		
    )
    }
}
export default Auth;