import { useState, memo } from "react";
import "./Portfolio.css";

const categories = [
  {
    title: "Toy & Nişan",
    images: [
      { img: "/toy1.jpg", desc: "Romantik toy çəkilişi" },
      { img: "/toy2.jpg", desc: "Toy fotoqrafiyası" },
      { img: "/toy3.jpg", desc: "Nikah" },
      { img: "/toy4.jpg", desc: "Nişan" },
      { img: "/toy5.jpg", desc: "Kreativ portretlər" },
    ],
  },
  {
    title: "Ad Günü",
    images: [
      { img: "/adgunu3.jpg", desc: "Doğum günü tədbiri" },
      { img: "/adgunu2.jpg", desc: "Doğum günü və dekorasiya" },
      { img: "/adgunu1.jpg", desc: "Uşaqların sevinci" },
      { img: "/adgunu4.jpg", desc: "Foto köşkü anlar" },
      { img: "/adgunu5.jpg", desc: "Doğum günü" },
    ],
  },
  {
    title: "Şəxsi",
    images: [
      { img: "/sexsi1.jpg", desc: "Portret fotoqrafiya" },
      { img: "/sexsi2.jpg", desc: "Lifestyle şəkillər" },
      { img: "/sexsi3.jpg", desc: "Emosional anlar" },
      { img: "/sexsi4.jpg", desc: "Kreativ kompozisiya" },
      { img: "/sexsi5.jpg", desc: "Professional retouch" },
    ],
  },
  {
    title: "Turlar & Səyahət",
    images: [
      { img: "/tur1.jpg", desc: "Təbiət mənzərələri" },
      { img: "/tur2.jpg", desc: "Macəra anları" },
      { img: "/tur3.jpg", desc: "Qar fotoqrafiyası" },
      { img: "/tur4.jpg", desc: "Kreativ kadrlar" },
      { img: "/tur5.jpg", desc: "Turdan kadrlar" },
    ],
  },
  {
    title: "Tədbirlər",
    images: [
      { img: "/tedbir1.jpg", desc: "Tədbirdən kadrlar" },
      { img: "/tedbir2.jpg", desc: "Gülüş və emosiyalar" },
      { img: "/tedbir3.jpg", desc: "İclas" },
      { img: "/tedbir4.jpg", desc: "Tədbirdən kadrlar" },
      { img: "/tedbir5.jpg", desc: "Dövlət tədbiri" },
    ],
  },
  {
    title: "Təbiət",
    images: [
      { img: "/tebiet1.jpg", desc: "Pambıq yığımı" },
      { img: "/tebiet2.jpg", desc: "Səhər dumanı ilə örtülmüş yaylaq" },
      { img: "/tebiet3.jpg", desc: "Axşamüstü çəkilişi" },
      { img: "/tebiet4.jpg", desc: "Pambıq yığımı" },
      { img: "/tebiet5.jpg", desc: "Qarlı dağ zirvələrində əyləncə" },
      { img: "/tebiet6.jpg", desc: "Payız rəngləri ilə təbiət səhnəsi" },
    ],
  }
];

function Portfolio() {

  const [activeSlides, setActiveSlides] = useState(
    categories.map(() => 0)
  );

  const handlePrev = (catIndex) => {
    setActiveSlides(prev => {
      const copy = [...prev];
      copy[catIndex] =
        copy[catIndex] === 0
          ? categories[catIndex].images.length - 1
          : copy[catIndex] - 1;
      return copy;
    });
  };

  const handleNext = (catIndex) => {
    setActiveSlides(prev => {
      const copy = [...prev];
      copy[catIndex] =
        (copy[catIndex] + 1) % categories[catIndex].images.length;
      return copy;
    });
  };

  return (

    <section id="portfolio" className="portfolio-section">

      <h2 className="portfolio-title">Portfolio</h2>

      <div className="portfolio-grid">

        {categories.map((cat, i) => (

          <div key={i} className="grid-slider">

            <h3 className="category-title">{cat.title}</h3>

            <div className="slider">

              {cat.images.map((imgObj, j) => {

                let className = "slide";

                if (j === activeSlides[i]) className += " activeSlide";
                else if (j === (activeSlides[i] - 1 + cat.images.length) % cat.images.length)
                  className += " prevSlide";
                else if (j === (activeSlides[i] + 1) % cat.images.length)
                  className += " nextSlide";

                return (

                  <div className={className} key={j}>

                    <img
                      src={imgObj.img}
                      alt={imgObj.desc}
                      loading="lazy"
                    />

                    <h4>{imgObj.desc}</h4>

                  </div>

                );

              })}

            </div>

            <button className="prev" onClick={() => handlePrev(i)}>‹</button>
            <button className="next" onClick={() => handleNext(i)}>›</button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default memo(Portfolio);