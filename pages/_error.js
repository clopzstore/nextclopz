 
 
import Headder from '../components/headder';
import React from "react";
import Footcom from "../components/footer";
import { NextSeo } from "next-seo";
export default class About extends React.Component {
  render() {
    return ( 
      <>
        <NextSeo
          title="Clopz store | Alamat url tidak di temukan "
          description="Toko Beragam Perlengkapan kecantikan Wanita"
          canonical="https://clopz.store/"
          openGraph={{
            url: "https://clopz.store/",
            title: "Clopz store | Alamat url tidak di temukan ",
            description: "Toko Beragam Perlengkapan kecantikan Wanita",
            images: [
              {
                url: "https://clopz.store/image/pic.jpeg",
                width: 600,
                height: 315,
                alt: "clopz store",
              },
            ],
            site_name: "clopz store",
          }}
        />
      <Headder/> 
      <div className='text-center img-error'>
        <img src='/image/1a.jpg'  alt='error' />
      </div>
      <Footcom />
      </>
    );
  };
};