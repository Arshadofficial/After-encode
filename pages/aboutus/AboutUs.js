import React from 'react';
import styles from '../../components/aboutus/AboutUs.module.css';


const AboutUs = () => {
  return (
    <div class={styles['aboutus-main']}>
      <h1 class="main text-center py-[6em] bg-[#2E3B80]" ><b>About Us</b></h1>    
    <div className="w-full bg-[#93C5FD] py-10 mb-10 ">
    <div className="px-5 mx-auto md:w-[80%] pt-5">  
    <div className={styles['about-us']}>
      <p>
        AfterEncode is an innovative educational platform established in 2023. Our primary goal is to empower developers with vital post-coding knowledge, transforming them into well-rounded web development experts.
      </p>
      <p>
      <h2>Our Vision</h2>
          We understand that true mastery of web development requires a diverse skill set. Our focus areas include Web Hosting, Domain Management, DNS Management, SSL Security, Cybersecurity, and SEO Strategy.
      </p>
      <p>
      <h2>Why Choose AfterEncode?</h2>
      AfterEncode stands out as a beacon of post-coding enlightenment. Our resources are curated by industry experts who have a profound understanding of the ever-evolving digital landscape. When you choose AfterEncode, you're choosing to transcend ordinary coding and embrace comprehensive web development.
      </p>
      <p>
      <h2>Join Our Community</h2>
      Whether you're a fledgling developer or a seasoned coder, AfterEncode welcomes you to our community. Explore our resources and unlock the door to a world of knowledge that goes beyond the confines of code.
      </p>
      <p>
      Step into the realm of web hosting, domain intricacies, security protocols, and more. AfterEncode isn't just a platform – it's a journey of continuous growth.
      </p>
      <p>
      <a href="[Your Facebook Link]" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  
  <a href="https://instagram.com/afterencode?igshid=MjEwN2IyYWYwYw==" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.tiktok.com/@aftercoded?_t=8evOFy6Z9UI&_r=1" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-tiktok"></i>
  </a>
      </p>
       <p>
        Welcome to the future of web development – welcome to AfterEncode!
    </p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default AboutUs;
