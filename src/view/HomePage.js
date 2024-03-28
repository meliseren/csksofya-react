import React from 'react'

const HomePage = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <img src="https://csksofya.com/img/logo.png" />
        <h1>Taze ve Organik Ürünler</h1>
        <p>Faaliyete başladığı günden itibaren sağlıklı ve lezzetli ürünlerle tüm müşterilerine en üst düzeyde hizmet sunmayı ilke edindik. Bu doğrultuda onlarca çeşit ürününü toptan olarak tüketicilere taze, hijyenik ve ekonomik olarak sunuyoruz.</p>
        <button
          className="btn"
        ><a href="/about">Detaylı Bilgi</a></button>
      </div>
    </div>
  )
}

export default HomePage