"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Form,
  Button,
  Schema,
  Message,
  useToaster,
  Input,
  Toggle,
  Container,
} from "rsuite";
import { Send } from "@rsuite/icons";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("Name is required."),
  email: StringType()
    .isEmail("Please enter a valid email.")
    .isRequired("Email is required."),
  subject: StringType().isRequired("Subject is required."),
  message: StringType().isRequired("Message is required."),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toaster = useToaster();

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    emailjs
      .send(
        "service_wadew4d", // Replace with Email.js service ID
        "template_my8byso", // Replace with Email.js template ID
        formData,
        "tG6JhuQ9EkeZzXpmv" // Replace with Email.js public key
      )
      .then(() => {
        toaster.push(
          <Message type="success">Message sent successfully!</Message>,
          { placement: "topCenter" }
        );
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      })
      .catch(() => {
        toaster.push(
          <Message type="error">Failed to send message. Try again!</Message>,
          { placement: "topCenter" }
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container
      className={` contact-form-container p-6 transition-all ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Contact Us</h2>

        {/* Dark Mode Toggle */}
        <Toggle
          size="lg"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren={<FaMoon />}
          unCheckedChildren={<FiSun />}
        />
      </div>

      <Form
        model={model}
        onSubmit={handleSubmit}
        fluid
        formValue={formData}
        onChange={(value) => setFormData(value)}
      >
        {/* Name */}
        <Form.Group controlId="name">
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={(value) => handleChange(value, "name")}
            placeholder="Enter your name"
            className={darkMode ? "bg-gray-800 text-white border-gray-600" : ""}
          />
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => handleChange(value, "email")}
            placeholder="Enter your email"
            className={darkMode ? "bg-gray-800 text-white border-gray-600" : ""}
          />
        </Form.Group>

        {/* Subject */}
        <Form.Group controlId="subject">
          <Form.ControlLabel>Subject</Form.ControlLabel>
          <Input
            name="subject"
            value={formData.subject}
            onChange={(value) => handleChange(value, "subject")}
            placeholder="Enter the subject"
            className={darkMode ? "bg-gray-800 text-white border-gray-600" : ""}
          />
        </Form.Group>

        {/* Message */}
        <Form.Group controlId="message">
          <Form.ControlLabel>Message</Form.ControlLabel>
          <Input
            name="message"
            as="textarea"
            rows={5}
            value={formData.message}
            onChange={(value) => handleChange(value, "message")}
            placeholder="Write your message here"
            className={darkMode ? "bg-gray-800 text-white border-gray-600" : ""}
          />
        </Form.Group>

        {/* Send Button */}
        <Form.Group>
          <Button
            appearance="primary"
            type="submit"
            loading={loading}
            endIcon={<Send />}
            className={darkMode ? "bg-blue-600 text-white border-none" : ""}
            block
          >
            Send Message
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
