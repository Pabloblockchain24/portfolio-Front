import { useForm } from "react-hook-form";
import { useState } from "react";
function Contact() {
  const { handleSubmit, register } = useForm();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch(
        "https://portfolio-backend-arce.vercel.app/api/contactMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        setMessage("¡Correo enviado correctamente!");
        setIsError(false);
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage("Hubo un error al enviar el correo.");
        setIsError(true);
        setTimeout(() => setMessage(""), 5000);
      }
    } catch (error) {
      console.error(error);
      setMessage("Hubo un error al enviar el correo.");
      setIsError(true);
      setTimeout(() => setMessage(""), 5000);
    }
  });

  return (
    <section className="contact" id="contact">
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

          <div className="contact-card-form-button-container">
            <button type="submit" className="contact-card-form-button">
              {" "}
              ENVIAR{" "}
            </button>
            {message && (
              <p style={{ color: isError ? "red" : "green" }}>{message}</p>
            )}
          </div>

          <hr />
          <footer className="contact-card-form-footer">
            Mi correo es: parcepaiva@gmail.com
          </footer>
        </form>
      </div>
    </section>
  );
}

export default Contact;
