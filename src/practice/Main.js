import React from 'react';
import {connect} from 'react-redux';
import { Col,Row } from 'react-bootstrap';
import Webcam from 'webcam-easy';
import {dataAdding} from './actions/main';

class Main extends React.Component{
    constructor(props){
super(props);
this.state={
    img:"",
    webcamElement:"",
    canvasElement:"",
    snapSoundElement:"",
    webcam:"",
    test:"notstart"
}
this.startTest=this.startTest.bind(this);
this.endTest=this.endTest.bind(this);
    }
 


   startTest(){

       var webcamElement = document.getElementById('webcam');
       var canvasElement = document.getElementById('canvas');
       var snapSoundElement = document.getElementById('snapSound');
       var webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

this.setState({
    webcamElement:webcamElement,
    canvasElement:canvasElement,
    snapSoundElement:snapSoundElement,
    webcam:webcam,
    test:"start"
})
      this.setState({ test:"start"})
       webcam.start()
      .then(result =>{
      this.timerID =setInterval(() => { 
           var picture = webcam.snap();
        console.log("picture", picture)
        this.props.dispatch(dataAdding(picture))
    }, 5000);
      
     
   })
   .catch(err => {
      // console.log(err);
   });


    }

 endTest(){
     console.log("snap")
    var webcamElement =this.state.webcamElement;
    var canvasElement = this.state.canvasElement;
    var snapSoundElement = this.state.snapSoundElement;
    var webcam = this.state.webcam;
    webcam.stop();
     clearInterval(this.timerID);
    this.setState({test:"end"})
 }
   
    render(){
        
        var allList=this.props.allpics
        if(allList.length>0){
        var list=allList.map((item,index)=>
           <img key={index} style={{width:"160px",height:"160px",padding:"5px"}} src={item} />
            );
       }

        return(
            <div style={{textAlign:"center"}}>
            {this.state.test==="start" && <h2>Your test is started</h2>}
            <Row className="custom_row">
            <Col md={8} ></Col>
             <Col md={2} >
                <video class="block" id="webcam" autoplay playsinline ></video>
            </Col>
            <Col md={2} >
                <canvas class="block" id="canvas" ></canvas>
            <audio id="snapSound" src="audio/snap.wav" preload = "auto"></audio>
            </Col>
            </Row>
           {this.state.test==="notstart" && <button class="btn btn-info" onClick={this.startTest} >Start Test</button>}
            {this.state.test==="start" && <button class="btn btn-info" onClick={this.endTest} >End Test</button>}
           
             
            {this.state.test==="end" && <div>
                <h3>The Pics clicked during test</h3>
                {list}
            </div>}
            </div>
        )
    }

}

const mapStatetToProps=(state)=>{
    console.log("state from form",state)
    return{
        allpics:state.MainReducer
    }
}

export default connect(mapStatetToProps)(Main);