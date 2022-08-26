import React from "react";
import PizzaLeft from "../assets/Contact.jpg";
import "../Pages/ContactPage.css"

function ContactPage() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name"></label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email"></label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message"></label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <input type="submit" className="Submitbtn"/>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
