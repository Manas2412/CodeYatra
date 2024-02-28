import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "himachal",
      info: "Explore scenic beauty, adventure sports, and serene retreats in this enchanting Indian state.",
      img: himachal,
      price: "6,000-7,000 INR",
    },
    {
      place: "goa",
      info: "Coastal bliss with sun-soaked beaches, vibrant nightlife, Portuguese charm, and delectable cuisine. A tropical haven for relaxation, culture, and excitement.",
      img: goa,
      price: "8,000-10,000 INR",
    },
    {
      place: "kerala",
      info: "Lush paradise in southern India, boasts serene backwaters, vibrant landscapes, rich culture, and Ayurvedic traditions. Nature's beauty and cultural richness await.",
      img: kerala,
      price: "10,000-12,000 INR",
    },
    {
      place: "rajasthan",
      info: " India's royal jewel, boasts majestic palaces, vibrant festivals, and desert landscapes. Experience rich history and cultural opulence.",
      img: rajasthan,
      price: "6,000-7,000 INR",
    },
  ];
  const packageInfoRow2 = [
    {
      place: "dubai",
      info: "Dubai dazzles with futuristic architecture, luxury shopping, desert adventures, and cultural experiences. A dynamic blend of opulence and innovation awaits.",
      img: dubai,
      price: "2 lakh-2.5 lakh INR",
    },
    {
      place: "europe",
      info: "Europe, a diverse tapestry of history and culture, enchants with iconic landmarks, charming cities, and picturesque landscapes. Explore endlessly captivating beauty.",
      img: europe,
      price: "90,000-1 lakh  INR",
    },
    {
      place: "thailand",
      info: "A tropical paradise, beckons with pristine beaches, vibrant markets, ornate temples, and rich cultural experiences. Explore endless enchantment.",
      img: thailand,
      price: "20,000-40,0000 INR",
    },
    {
      place: "maldives",
      info: "Maldives, a tropical haven, entices with overwater bungalows, turquoise lagoons, vibrant coral reefs, and serene luxury. Paradise perfected.",
      img: maldives,
      price: "40,000-50,000 INR",
    },
  ];
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Best Selling Destinations!</h1>
          <div className="outerbox">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
              {packageInfoRow1.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <h2>
              International
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
