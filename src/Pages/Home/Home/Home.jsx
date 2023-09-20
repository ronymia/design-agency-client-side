import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

export default function Home() {
     return (
          <div>
               <Banner />
               <Client />
               <Services />
               <Testimonial />
               <Contact />
          </div>
     )
}
