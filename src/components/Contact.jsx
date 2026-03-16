import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Contact = () => {

  const [insta, setInsta] = useState(0);
  const [fb, setFb] = useState(0);
  const [tiktok, setTiktok] = useState(0);

  useEffect(() => {

    let i = 0;
    let f = 0;
    let t = 0;

    const interval = setInterval(() => {

      if (i < 600) {
        i += 10;
        setInsta(i);
      }

      if (f < 500) {
        f += 10;
        setFb(f);
      }

      if (t < 1100) {
        t += 20;
        setTiktok(t);
      }

    }, 30);

    return () => clearInterval(interval);

  }, []);

  return (
    <section id="contact" className="contact">

      <div className="contact-header">
        <h1>Mənimlə Əlaqəyə Keç</h1>
        <p>
          Sosial şəbəkələrdə bizi izləyərək layihələrimizi və yenilikləri
          ilk görənlərdən biri ol.
        </p>

        <p className="contact-sub">
          Sualın varsa və ya əməkdaşlıq etmək istəyirsənsə, WhatsApp vasitəsilə
          birbaşa əlaqə saxlaya bilərsən.
        </p>
      </div>

      <div className="social-container">

        <a href="https://www.facebook.com/share/17Cbs4KSjx/" className="social-card facebook">
          <FaFacebookF />
          <span>Facebook</span>
        </a>

        <a href="https://www.instagram.com/photographeralinajaf?igsh=MTEwaDhjMmI2YWFzcw==" className="social-card instagram">
          <FaInstagram />
          <span>Instagram</span>
        </a>

        <a href="https://www.tiktok.com/@fotoqrafali?_r=1&_t=ZS-94jeF08ATNU" className="social-card tiktok">
          <FaTiktok />
          <span>TikTok</span>
        </a>

        <a href="https://wa.me/994776171600" className="social-card whatsapp">
          <FaWhatsapp />
          <span>077 617 16 00</span>
        </a>

      </div>

      <div className="stats">

        <div className="stat-box">
          <h2>{insta >= 600 ? "0.6K" : insta}</h2>
          <p>Instagram Followers</p>
        </div>

        <div className="stat-box">
          <h2>{fb >= 500 ? "0.5K" : fb}</h2>
          <p>Facebook Followers</p>
        </div>

        <div className="stat-box">
          <h2>{tiktok >= 1100 ? "1.1K" : tiktok}</h2>
          <p>TikTok Followers</p>
        </div>

      </div>

    </section>
  );
};

export default Contact;