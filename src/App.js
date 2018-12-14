import React, {Component} from 'react';
import Map from './containers/MapContainer.js';
import './config.js';

class App extends Component {

  render() {
    return (
      <main>
      <h1>Fundalism</h1>
        <section id="map-container">
          <Map />
        </section>
      </main>
    );
  }
}

export default App;
