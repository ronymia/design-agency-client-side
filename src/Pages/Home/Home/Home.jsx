import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import OurWork from '../OurWork/OurWork';

export default function Home() {
     return (
          <div>
               <Banner />
               <Client />
               <Services />
               <OurWork />
               <Testimonial />
               <Contact />
          </div>
     )
}
