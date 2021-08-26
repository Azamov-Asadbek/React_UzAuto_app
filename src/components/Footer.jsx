import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillGooglePlusSquare,
} from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container footer-wrapper">
          <div className="footer-top-item">
            <h3>Foydali ma'lumotlar</h3>
            <Link to="/services" className="footer-item">
              Yangiliklar
            </Link>
            <Link to="/services" className="footer-item">
              Yangi mahsulotlar
            </Link>
            <Link to="/sign-in" className="footer-item">
              Bo'sh ish o'rinlari
            </Link>
          </div>

          <div className="footer-top-item">
            <h3>Manzil</h3>
            <p className="footer-item">Toshkent shahar, nechanchidir uy</p>
            <p className="footer-item">
              Transport: Avtobuslar №2, 7, 14, 46, 78
            </p>
            <p className="footer-item">Ish vaqti: 09:00-18:00</p>
          </div>

          <div className="footer-top-item  ">
            <form>
              <div className="footer-wr">
                <input
                  type="email"
                  name="email"
                  className="footer-input"
                  required
                />
                <label>Email</label>
                <Button buttonSize="btn_medium" buttonStyle="btns_outline">
                  Go
                </Button>
              </div>
            </form>
            <div className="footer-input-text">
              <h5>
                Sotib olganingizdan keyin 3 yillik kafolatga ega bo'lasiz!
              </h5>
            </div>
          </div>
        </div>

        <div style={{ flexWrap: 'wrap' }} className="container footer-wrapper">
          <div className="footer-item-icons">
            <Link className="foooter-item-icon">
              <AiFillFacebook />
            </Link>

            <Link className="foooter-item-icon">
              <AiFillGooglePlusSquare />
            </Link>

            <Link className="foooter-item-icon">
              <AiFillTwitterSquare />
            </Link>

            <Link className="foooter-item-icon">
              <AiFillInstagram />
            </Link>

            <div className="facebok-like-wrapper cl-blue">
              <AiFillFacebook className="facebok-like" />
              <span>Like</span>
            </div>

            <div className="facebok-like-wrapper">
              <AiOutlineTwitter className="facebok-like col-blue" />
              <span>Follow</span>
            </div>
          </div>
          <div className="footer-item-developer-brand">
            <img
              src="./A_logo_compress.png"
              alt="Developer logo"
              className="footer-item-developer-img"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            <span>&copy;</span> Азамов, Uzbekistan 2021
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
