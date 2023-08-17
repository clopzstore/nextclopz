 
import fetch from "isomorphic-unfetch"; 
import Headder from '../component/heads';
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
      <>
      <Headder
    	canonicalUrl= ''
    	structuredData=''
    	title="NextJs Head"
    	description="NextJs Head, a reliable guide for how to use it and what it's really for."
    	ogType="website"
    	/> 
      <ul>
       {this.props.datas.map((a) => (
          <li key={a.id} >{a.namakategori}</li>
        ))}  
        </ul>
      </>
    );
  };
};