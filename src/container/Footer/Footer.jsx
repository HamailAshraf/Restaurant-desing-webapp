// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FooterOverlay, Newsletter} from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Super Market, School Rd, F-6 Markaz F 6 Markaz F-6, Islamabad, Islamabad Capital Territory 44000</p>
        <p className='p__opensans'>+92 333-123-4567</p>
        <p className='p__opensans'>+92 333-223-4455</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_image'/>
        <p className='p__opensans'>&quot;The best way to find yourself is to have yourself in the service of others.&quot;</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
