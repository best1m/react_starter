import React, {Component} from 'react';
import Webcam from 'react-webcam';

class App extends Component {
  render () {
    return (
      <div>
        <center>
          <Webcam width={1800} height={1000}/>
        </center>
      </div>
    );
  }
}

export default App;
