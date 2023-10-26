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
    photo: "/img-1.png",
    alt: "sem gaiolas e sem correntes",
  },
  {
    photo: "/img-1.png",
    alt: "sem gaiolas e sem correntes",
  },
  {
    photo: "/img-1.png",
    alt: "sem gaiolas e sem correntes",
  },
];
const featuresText = [
  {
    title: "Acomodações",
    alt: "sem gaiolas e sem correntes",
  },
  {
    title: "Acomodações",
    alt: "sem gaiolas e sem correntes",
  },
  {
    title: "Acomodações",
    alt: "sem gaiolas e sem correntes",
  },
  {
    title: "Acomodações",
    alt: "sem gaiolas e sem correntes",
  },
  {
    title: "Acomodações",
    alt: "sem gaiolas e sem correntes",
  },
];
