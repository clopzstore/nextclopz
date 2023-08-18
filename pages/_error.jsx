 
 
import Headder from '../components/headder';
import React from "react";
import Footcom from "../components/footer";
import { NextSeo } from "next-seo";
export default class About extends React.Component {
  render() {
    return ( 
      <>
        <NextSeo
          title="Clopzstore | Alamat url tidak di temukan "
          description="Toko Beragam Perlengkapan kecantikan Wanita"
          canonical="https://clopzstore.my.id/"
          openGraph={{
            url: "https://clopzstore.my.id/",
            title: "Clopzstore | Alamat url tidak di temukan ",
            description: "Toko Beragam Perlengkapan kecantikan Wanita",
            images: [
              {
                url: "https://clopzstore.my.id/image/pic.jpeg",
                width: 600,
                height: 315,
                alt: "clopzstore",
              },
            ],
            site_name: "clopzstore",
          }}
        />
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