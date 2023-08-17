import Layout from "../components/layout"; 
import fetch from "isomorphic-unfetch"; 
import React from "react";
export const config = {
  runtime: 'experimental-edge',
}
export default class Index extends React.Component {
  static async getInitialProps() {
    const ress = await fetch(
      "https://api.airtable.com/v0/appMmICDCO6mBhZYl/kategori?api_key=keysY3XpvIdkAd38I"
    );
    const shows = await ress.json();
  
    const datas = [];
    for (var i = 0; i < shows.records.length; i++) {
      var vall = shows.records[i].fields;
      var id = shows.records[i].id;
      var idkategori = vall["id_kategori"];
      var namakategori = vall["nama_kategori"];

      datas.push({
        id: id,
        idkategori: idkategori,
        namakategori: namakategori,
      });
    }
    return { datas };
  }
  render() {
    return ( 
      <Layout>
       {this.props.datas.map((a) => (
          <div>{a.namakategori}</div>
        ))} 
  	</Layout>
    );
  };
};