import React from "react";

const Features = () => {
  return (
    <>
      <section id="features">
        <main>
          <h2>Serviços</h2>
          <div className="features-texts">
            {featuresText.map((item) => (
              <div className="text" key={item.alt} title={item.alt}>
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <div className="features-photos">
            {featuresPhotos.map((item) => (
              <div className="photo" key={item.alt} title={item.alt}>
                <img src={item.photo} alt={item.alt} />
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Features;
const featuresPhotos = [
  {
    photo: "/img-1.webp",
    alt: "Limpeza de tapetes",
  },
  {
    photo: "/img-2.webp",
    alt: "Limpeza de sofas",
  },
  {
    photo: "/img-3.webp",
    alt: "Limpeza de pisos",
  },
];
const featuresText = [
  {
    title: "Limpeza de Colchões",
    alt: "sem gaiolas e sem correntes",
  },
  {
    title: "Limpeza de Sofás",
    alt: "sem gaiolas e sem correntes",
  },
  {
    title: "Limpeza de Tapetes",
    alt: "sem gaiolas e sem correntes",
  },
  {
    title: "Limpeza de Pisos",
    alt: "sem gaiolas e sem correntes",
  },
  {
    title: "Impermeabilização",
    alt: "sem gaiolas e sem correntes",
  },
];
