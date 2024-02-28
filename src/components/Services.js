import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Best Flights",
      info: "Experience the pinnacle of convenience with our AI-based flight booking on our travel website. Seamlessly find and  book the best flights, tailored to your preferences, ensuring a smooth journey.",
      icon: "fas fa-plane-departure",
    },
    {
      header: "Best deals",
      info: "Unlock unbeatable travel deals with our AI-powered platform. Discover tailored recommendations and exclusive offers for a seamless, budget-friendly journey on our travel website.",
      icon: "fas fa-rupee-sign",
    },
    {
      header: "Railway Bookings",
      info: "Revolutionize your rail travel experience with our AI-based booking on our travel website. Effortlessly find, book, and optimize your train journeys for a smarter and smoother travel adventure.",
      icon: "fas fa-subway",
    },
  ];
  const serviceInfoRow2 = [
    {
      header: "Food And Drinks",
      info: "Elevate your culinary journey with our AI-driven food and drinks recommendations on our travel website. Personalized choices to savor every travel moment.",
      icon: "fas fa-utensils",
    },
    {
      header: "Hotels",
      info: "Indulge in unparalleled comfort with our AI-driven hotel recommendations on our travel website. Discover personalized stays for a perfect accommodation experience tailored to your preferences.",
      icon: "fas fa-hotel",
    },
    {
      header: "Safe Travels",
      info: "Prioritize your safety with our AI-driven travel safety features on our website. Real-time updates, risk assessments, and personalized recommendations for secure and worry-free journeys.",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div className="container4">
        <section className="service" id="services">
          <h1>Have a look at our services!</h1>
          <div className="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div className="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
