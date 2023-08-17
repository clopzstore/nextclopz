 
 
import Headder from '../components/headder';
import React from "react";
import Footcom from "../components/footer";
export default class About extends React.Component {
   
  render() {
    return ( 
      <>
      <Headder
    	canonicalUrl= ''
    	structuredData=''
    	title="ABOUT"
    	description="NextJs Head, a reliable guide for how to use it and what it's really for."
    	ogType="website"
    	/> 
      <div className='text-center img-error'>
        <img src='/image/1a.jpg'  alt='error' />
      </div>
      <Footcom />
      </>
    );
  };
};