
import React, { Component } from 'react';

class App extends Component {
 state = {
   person: {name:"name"
  
  
  },
   bool:false

  }
  change(){
    this.setState({
      bool:!this.state.bool
    })
  }

 render() {
   return (
     <div className="App">
      <button onClick={()=>this.change} >  CLICK ME  </button>
    
          
     </div>
   );
 }
}
export default App;