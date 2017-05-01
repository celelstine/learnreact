import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 0,
		 text : 'Initial data...'
      }

      this.setNewNumber = this.setNewNumber.bind(this);
	  this.updateState = this.updateState.bind(this);
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   };
   
   updateState(e) {
      this.setState({text: e.target.value});
   };

   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data} myDataProp = {this.state.text} 
               updateStateProp = {this.updateState}></Content>
			<hr />
			 <input type = "text" value = {this.state.text} 
               onChange = {this.updateState} />
            <h4>{this.state.text}</h4>
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
			 <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

export default App;