
function Contact() {
  return (
    <section className='contact' id="contact">
      <h1>Contact</h1>

      <div className="contact-card">
        <form className="contact-card-form">

          <article className="contact-card-form-article">
            <input type="text"
              placeholder="Juan Perez"
            />
          </article>

          <article className="contact-card-form-article">
            <input type="email"
              placeholder="juanperez@gmail.com"
            />
          </article>

          <article className="contact-card-form-article">
            <textarea
              rows="3"
              placeholder="Cuéntame más..."
            ></textarea>
          </article>

          <button type="submit" className="contact-card-form-button"> ENVIAR </button>

          <hr />
          <footer className='contact-card-form-footer'>
            Mi correo es: parcepaiva@gmail.com
          </footer>
        </form>
      </div>
    </section >
  )
}

export default Contact