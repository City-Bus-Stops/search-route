import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const InfoPanel = () => (
  <div className="ui vertical stripe segment">
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="six wide column">
          <h3 className="ui header">We Help Companies and Companions</h3>
          <p>We can give your company superpowers to do things that they never thought possible.
            Let us delight your
            customers and empower your needs...through pure data analytics.</p>
          <h3 className="ui header">We Make Bananas That Can Dance</h3>
          <p>Yes that is right, you thought it was the stuff of dreams,
            but even bananas can be bioengineered.</p>
        </div>
        <div className="ten wide">
          <div id="map">
            <div className="leaflet-container">
              <Map
                center={[53.66946, 23.824368]}
                zoom={12}
                maxZoom={13}
                minZoom={11}
                zoomControl={false}
              >
                <TileLayer
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
              </Map>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="center aligned column">
          <a className="ui huge button">Check Them Out</a>
        </div>
      </div>
    </div>
  </div>
);

export default InfoPanel;
