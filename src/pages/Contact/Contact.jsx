import { useForm } from "react-hook-form"

function Contact() {
  const { handleSubmit, register } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    try {
      await fetch("https://portfolio-backend-arce.vercel.app/api/contactMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error(error)
    }

  })


  return (
    <section className='contact' id="contact">
     <h1>Contact</h1>
      <div className="contact-card">
        <form onSubmit={onSubmit} className="contact-card-form">

          <article className="contact-card-form-article">
            <input 
              type="text"
              {...register("name", { required: true })}
              placeholder="Juan Perez"
            />
          </article>

          <article className="contact-card-form-article">
            <input 
              type="email"
              {...register("email", { required: true })}
              placeholder="juanperez@gmail.com"
            />
          </article>

          <article className="contact-card-form-article">
            <textarea
              rows="3"
              {...register("message", { required: true })}
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