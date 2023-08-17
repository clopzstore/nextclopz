 
import fetch from "isomorphic-unfetch";
import * as alasql from "alasql";
import React from "react";
export default class Index extends React.Component {
  static async getInitialProps() {
    const ress = await fetch(
      "https://api.airtable.com/v0/appMmICDCO6mBhZYl/kategori?api_key=keysY3XpvIdkAd38I"
    );
    const shows = await ress.json();
    const resd = alasql("SELECT * FROM ?", [shows.records]);
    var data = [];
    for (var i = 0; i < resd.length; i++) {
      var vall = resd[i].fields;
      var id = resd[i].id;
      var idkategori = vall["id_kategori"];
      var namakategori = vall["nama_kategori"];
      data.push({
        id: id,
        idkategori: idkategori,
        namakategori: namakategori,
      });
    }
    return { data };
  }
  render() {
    return ( 
   <div>
        {this.props.data.map((a, index) => (
          <div>{a.namakategori}</div>
        ))}
      </div> 
    );
  };
};