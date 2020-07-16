import React from 'react';
import MYNavigationbar from './Navbar';
import {Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import Main from './Main';

class Form extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            Lemail:"",
            Lpassword:"",
            login:"no"
        }
       
    }


handle_Lemail=(event)=>{
    this.setState({Lemail:event.target.value})
}

handle_Lpassword=(event)=>{
    this.setState({Lpassword:event.target.value})
}

Login=()=>{
    var allUsers=this.props.signUpData;
     console.log(allUsers,"allUsers")
   
    function search(nameKey, allUsers){
        console.log("login")
    for (var i=0; i < allUsers.length; i++) {
        if (allUsers[i].email === nameKey) {
            return allUsers[i];
            }
        }
    }
     var resultObject = search(this.state.Lemail, allUsers);
     if(resultObject!=undefined){
         if(resultObject.email==this.state.Lemail && resultObject.password==this.state.Lpassword){
         alert("Login Successfuly")
         this.setState({ login:"yes"})
        }else{
            alert("login failed")
            this.setState({ login:"not"})
        }
     }else{
         alert("login failed")
     }
     
    console.log(resultObject,"loogin user details")
    this.setState({ Lemail:"",
            Lpassword:""})
}


    render(){
        return(
          <Row className="custom_row" style={{backgroundColor:"#2a283d",color:"wheat"}}>
                <MYNavigationbar />
               
                {this.state.login =="yes" ? <div style={{height:"768px"}}>  <Main/> </div>:
                 <div>
                  <p style={{textAlign:"center",padding:"10px"}}>Use these credentials for login username: dange.onkar5@gmail.com And pssword: test@123</p>
                 <Row className="custom_row form">
                 <Row className="">
                  
                    <Col md={12} className="text-center login" id="loginbtn" >
                       <h2 className="text-center"> Login </h2>
                    </Col> 
                </Row>
                 <div id="login" >
                   
                    <Row className="up2">
                    <Col md={12} className="">
                        <input type="text"  onChange={this.handle_Lemail} value={this.state.Lemail} placeholder="Username" />
                    </Col>
                    </Row>
                    <Row className="up2">
                        <Col md={12} className="">
                            <input type="password"  onChange={this.handle_Lpassword} value={this.state.Lpassword} placeholder="Password" />
                        </Col>
                    </Row>
                    <Row className="text-center getstart up2" onClick={this.Login}> Login </Row>
                </div>
               
                 </Row>
                 
                </div>
                }
        </Row>
        )
    }
}

const mapStatetToProps=(state)=>{
    console.log("state from form",state)
    return{
        signUpData:state.SignUp
    }
}

export default connect(mapStatetToProps)(Form);