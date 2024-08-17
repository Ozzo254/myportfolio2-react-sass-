import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonials</h2>
      <section>
        <TestimonialCard
          name={"Austine The First"}
          feedback={"You designs are impressive, keep the good work"}
        />
        <TestimonialCard
          name={"Austine The Second"}
          feedback={"It's you colors and layout for Me. Amazing!"}
        />
        <TestimonialCard
          name={"Austine"}
          feedback={"You’re the CEO, a bit of a loner🕵️. Alienated fella💀"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
