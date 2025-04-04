import React, { useState } from "react";

export default function PageContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contacto</h2>
      <p style={styles.description}>
        ¡Nos encantaría saber de ti! Por favor, completa el formulario para enviarnos un mensaje.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
            rows="4"
            required
            style={styles.textarea}
          />
        </div>

        <button type="submit" style={styles.submitBtn}>Enviar</button>
      </form>

      {/* WhatsApp and Instagram Links */}
      <div style={styles.contactInfo}>
        <p style={styles.contactText}>
          Contáctanos por WhatsApp:{" "}
          <a href="https://wa.me/9833677600" style={styles.link}>9833677600</a>
        </p>
        <p style={styles.contactText}>
          Síguenos en Instagram:{" "}
          <a href="https://www.instagram.com/alexispootchan" style={styles.link}>@alexis</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  title: {
    textAlign: "center",
    color: "#333"
  },
  description: {
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  formGroup: {
    marginBottom: "15px"
  },
  label: {
    fontSize: "14px",
    color: "#555"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "5px",
    width: "100%"
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "5px",
    width: "100%"
  },
  submitBtn: {
    backgroundColor: "#0066cc",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px"
  },
  contactInfo: {
    marginTop: "20px",
    textAlign: "center"
  },
  contactText: {
    fontSize: "16px",
    margin: "5px 0"
  },
  link: {
    color: "#0066cc",
    textDecoration: "none"
  }
};
