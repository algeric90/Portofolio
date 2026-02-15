import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="container py-5">
      <div className="contact-wrapper rounded-5 p-4 p-lg-5">
        <h2 className="text-center fw-bold mb-5">Get in Touch</h2>

        <div className="row g-5">
          {/* Left Content */}
          <div className="col-lg-5">
            <h5 className="fw-semibold mb-3">Have an Enquiry?</h5>
            <p className="contact-text">
              I'm always excited to discuss, share ideas, and collaborate on
              projects related to web and software development. Connect with
              me on LinkedIn, or drop me an email. I'll get back to you as
              soon as I can!
            </p>

            <div className="contact-info mt-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <FaLinkedin size={20} />
                <span>Alfa Rifa Luky Achmad Rayendra</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                <FaEnvelope size={20} />
                <span>alfarifaluky.ar@gmail.com</span>
              </div>

              <div className="mt-4">
                <h6 className="fw-semibold">My Location</h6>
                <div className="d-flex align-items-center gap-3 mt-2">
                  <FaMapMarkerAlt size={20} />
                  <span>OKU Timur, Sumatera Selatan, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-7">
            <form className="contact-form">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control rounded-3"
                  rows="5"
                  placeholder="Write Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 rounded-4 py-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}