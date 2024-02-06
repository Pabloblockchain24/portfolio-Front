import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <main className='contact' id="contact">
      <div className="contact-card">
        <h1 className='contact-title'> Contact</h1>
        <form className="contact-form">

          <article className="contact-article">
            <input type="text"
              className="contact-input"
              placeholder="Juan Perez"
            />
          </article>

          <article className="contact-article">
            <input type="email"
              className="contact-input"
              placeholder="juanperez@gmail.com"
            />
          </article>

          <article className="contact-article">
            <textarea
              className="contact-input"
              rows="1"
              placeholder="Cuéntame más..."
            ></textarea>
          </article>

          <button type="submit" className="contact-button"> ENVIAR </button>

          <hr />
          <div className='auxContact'>
            Mi correo es: parcepaiva@gmail.com
          </div>
        </form>
      </div>
    </main >
  )
}

export default Contact