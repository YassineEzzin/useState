
import React, { Component } from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
class App extends Component {
 
  
   
     

     state={
      
      person:{
        name:"Yassine Ezzine ",
        bio: "student",
        profession:"soft and hardware devaloper",
        umgSrc:"https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/320113118_1993812564158318_7983865531305948191_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=1yvTxKpXp6UAX8zqz0g&_nc_ht=scontent.ftun8-1.fna&oh=03_AdRkY5BfRi2e_JXz9xVmLOBDM43w_l9uxmIboSG6LvWAfA&oe=65621A96",

      },
      bool:false ,
      timeInterval:0
      

     }

     
     componentDidMount() {
      this.intervalID = setInterval(
        () => this.setState({ timeInterval: this.state.timeInterval + 1 }),
        1000
      ) }

  
      componentWillUnmount() {
        clearInterval(this.intervalID);
        console.log("interval ID ", this.intervalID);
      }
    

  change = () =>   {
    this.setState({
      bool:!this.state.bool ,
      
      
      
    })
  }
  

 render() {
   return (
     <di className="App">
<Button className='button' onClick={this.change} variant="primary" size="lg">Click to see profile</Button>      
        {this.state.bool && (
       
          <div className='profile' >

             <h1> {this.state.person.name} </h1>
             <h3>  {this.state.person.bio} </h3>
             <img  className='image' src={this.state.person.umgSrc    } alt='yassine'/>
             <h2> {this.state.person.profession} </h2>
             <p> Time interval since component was mounted: {this.state.timeInterval}{" "}</p>
              
          </div>          
          
        )
        }

          
     </di>
   )
 }
   }

export default App;