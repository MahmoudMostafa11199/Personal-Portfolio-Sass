import { services } from '../redux/services';

function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="heading heading__secondary">Services</h2>

        <div className="services">
          {services.map((service) => (
            <div key={service.id} className="services__item">
              <div className="services__line"></div>
              <service.icon className="services__icon" size={64} />
              <h4 className="services__title">{service.title}</h4>
              <p className="services__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
