"use client";

import { useRef, useState } from "react";
import {
  Button,
  ButtonToolbar,
  Col,
  Container,
  Form,
  Input,
  Row,
  Schema,
} from "rsuite";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const { StringType } = Schema.Types;

const contactFormModal = Schema.Model({
  name: StringType().isRequired("Name is Required"),
  email: StringType()
    .isEmail("Enter a valid email")
    .isRequired("Email is required"),
  subject: StringType().isRequired("Subject is required"),
  message: StringType().isRequired("Message is required"),
});

const ContactForm2 = () => {
  const contactFormRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    // console.log(formData);

    emailjs
      .send(
        "service_wadew4d", // Replace with Email.js service ID
        "template_my8byso", // Replace with Email.js template ID
        formData,
        "tG6JhuQ9EkeZzXpmv" // Replace with Email.js public key
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      })
      .catch(() => {
        alert("Failed to send message. Try again!");
      })
      .finally(() => setLoading(false));
  };

  // console.log(formData);

  return (
    <Container className="">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="relative w-full h-[500px] sm:h-[750px] ">
            <Image
              src="https://7xweddings.com/assets/images/modal/popupimage.jpg"
              alt="contact-image"
              fill
              className="object-cover"
            />
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <div className=" px-9 flex flex-col py-6 ">
            <div className=" mb-5 ">
              <h3 className=" text-2xl md:text-3xl text-pink-400 mb-4 ">
                Plan the best day of your life with only the best
              </h3>
              <p className=" text-gray-300 ">
                Fill the form below to let expert wedding planners make your
                dream come true.
              </p>
            </div>
            <Form
              fluid
              formValue={formData}
              onChange={setFormData}
              model={contactFormModal}
              ref={contactFormRef}
            >
              <Form.Group controlId="name">
                <Form.ControlLabel>Name</Form.ControlLabel>
                <Form.Control name="name" />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.ControlLabel>Subject</Form.ControlLabel>
                <Form.Control name="subject" placeholder="Enter Subject" />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Message</Form.ControlLabel>
                <Input
                  name="message"
                  as="textarea"
                  rows={5}
                  value={formData.message}
                  onChange={(value) =>
                    setFormData((val) => ({
                      ...val,
                      message: value,
                    }))
                  }
                  placeholder="Write your message here"
                />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button
                    appearance="primary"
                    loading={loading}
                    onClick={() => handleSubmit()}
                    className="  "
                    color="yellow"
                  >
                    Send Message
                  </Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm2;
