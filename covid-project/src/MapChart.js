import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import covidService from './services/CovidService';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0, 250000])
  .range(["#ffedea", "#ff5233"]);

export default class MapChart extends React.Component {

    constructor(props){

        super(props);
        

    }


  render() {
    const data = this.props.data;
    return (
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147
        }}
      >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find(s => s.CountryCode === geo.properties.ISO_A2);
                console.log("Found match for ", geo, d);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                  fill={d ? colorScale(d.TotalConfirmed) : "#F5F4F6"}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
    );
  }
};


