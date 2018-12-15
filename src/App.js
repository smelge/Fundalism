import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Map from './containers/MapContainer.js';
// import './config.js';

class App extends Component {

  render() {
    return (
      <main>
      <h1>Fundalism</h1>
        <section id="map-container">
          <a className="btn btn-lg btn-success" href="#">Test Button</a>
        </section>
      </main>
    );
  }
}

export default App;
