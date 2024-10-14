import { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    // Name validation
    if (!formData.name) errors.name = "Name is required";

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    // Message validation
    if (!formData.message) {
      errors.message = "Message is required";
    }

    // Return the errors object
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_7kktr6h",
          "template_rd7xgl2",
          formData,
          "QlBJDtaW1wWLfDhXf"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message!");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-8 w-full appearence-none rounded-lg border border-gray-400 bg-transparent px-3 py-2 text-sm focus:border-gray- 400 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-pink-700">´{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-8 w-full appearence-none rounded-lg border border-gray-400 bg-transparent px-3 py-2 text-sm focus:border-gray- 400 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-pink-700">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-8 w-full appearence-none rounded-lg border border-gray-400 bg-transparent px-3 py-2 text-sm focus:border-gray- 400 focus:outline-none"
            rows="4"
          />
          {errors.message && (
            <p className="text-sm text-pink-700">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`button-form ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
