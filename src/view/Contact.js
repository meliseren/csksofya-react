import React from 'react';

const Contact = () => {

  const mapStyle = {
    border: '0',
    width: '600px',
    height: '450px',
  };

  const GoogleMaps = () => (
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.91977695346!2d28.984131276164597!3d41.09259941422831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6906a99f341%3A0xdf4449d74eb0d054!2zQ3NrIFNvZnlhIEdydXAgR8SxZGEgVHVyLiDEsG7Fny4gxLDDpyB2ZSBExLHFnyBUaWMuIEx0ZC4gxZ50aS4!5e0!3m2!1str!2str!4v1693987791418!5m2!1str!2str"
      width="600"
      height="450"
      style={mapStyle}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );

  return (
    <div className="container">
      <p className="title">İLETİŞİM</p>
      <div className="contact">
        {GoogleMaps()}
        <div className="contact-text">
          <a><i className="fa-solid fa-location-dot"></i>Seyrantepe Mah. Altınay Cad. & Gökdeniz Sok. No:7 34418 Kağıthane/İstanbul Türkiye</a>
          <a><i className="fa-solid fa-envelope"></i>info@csksofya.com</a>
          <a><i className="fa-solid fa-phone"></i>+90 (533) 150 45 54</a>
          <a><i className="fa-solid fa-phone"></i>+90 (530) 178 12 15</a>
        </div>
      </div>
    </div>
  )
}

export default Contact