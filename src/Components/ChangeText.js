import React from 'react';

class ChangeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            string : 'I am Toshant'
        };
    }
 render() {
     return(
         <div>
             <p>{this.state.string}</p>
             <button onClick={() => this.setState({string :'I am toshant arora'})}>ChangeText</button>
         </div>
     )
 }

}

export default ChangeText;