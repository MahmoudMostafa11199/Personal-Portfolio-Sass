import { services } from './skills';

import HeadingSection from '../../components/HeadingSection';

function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <HeadingSection>Services</HeadingSection>

        <div className="services">
          {services.map((service) => (
            <div key={service.id} className="services__item" data-aos="flip-up">
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
