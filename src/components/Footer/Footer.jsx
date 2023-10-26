import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="left">
          <h2>Contato</h2>
          <p>Precisa de um orçamento? Fale conosco!</p>
          <div className="contact" id="contact">
            <p>
              Telefone: <a href="tel:98845-2064">(22)998524145</a>
            </p>
            <p>
              Instagram:{" "}
              <a href="https://www.instagram.com/liglav" target="_blank">
                @liglav
              </a>
            </p>
            <p>
              Facebook:{" "}
              <a href="https://www.facebook.com/LAVAGEMSECOCF" target="_blank">
                LigLav
              </a>
            </p>
          </div>
        </section>

        <address className="right">
          <div className="map">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=cabo frio&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://connectionsgame.org/">Connections Unlimited</a>
            </div>
            <style>
              {`.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}`}
            </style>
          </div>
        </address>
      </footer>
    </>
  );
};

export default Footer;
