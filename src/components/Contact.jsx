import { Mail, Github, Linkedin } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tb7c8xs",
        "template_b3uuns8",
        formRef.current,
        "s_2oYhIkTu_4w2pm7"
      )
      .then(() => {
        toast.success(
          "🎉 Thank you for your message! I'll get back to you soon."
        );

        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("❌ Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="py-5 px-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* ------------------ HEADING ------------------ */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">
            Contact <span className="text-orange-400">With Me</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-xl">
            Feel free to directly contact with me, via Linkedin or email follow
            or hit me up on LinkedIn.
          </p>
        </div>

        {/*--------------------------- GRID --------------------------  */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/*------------------------- LEFT CARD ----------------------*/}
          <div className="border border-pink-500 rounded-2xl p-6 bg-slate-800 shadow-lg relative">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="https://rahat-qadeer.lovable.app/lovable-uploads/b37ab960-9f08-4b2f-be00-34a132d6cdef.png"
                alt="Rahat Qadeer"
                className="w-full h-40 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">RAHAT QADEER</h3>
            <p className="text-orange-400 mb-6">Software Engineering Student</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-orange-400 w-5 h-5" />
                <span>rahatqadeerbhatti@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-orange-400 w-5 h-5" />
                <a
                  href="https://github.com/RahatQadeer"
                  target="_blank"
                  className="hover:underline"
                >
                  github.com/RahatQadeer
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-orange-400 w-5 h-5" />
                <a
                  href="https://linkedin.com/in/rahat-qadeer"
                  target="_blank"
                  className="hover:underline"
                >
                  linkedin.com/in/rahat-qadeer
                </a>
              </div>
            </div>
          </div>

          {/*-------------------- RIGHT FORM --------------------- */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-slate-800 rounded-2xl p-6 space-y-6 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                value={formData.from_name}
                onChange={handleChange}
                className="bg-slate-700 p-3 rounded-md w-full focus:outline-none"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                value={formData.from_email}
                onChange={handleChange}
                className="bg-slate-700 p-3 rounded-md w-full focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="bg-slate-700 p-3 rounded-md w-full focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-slate-700 p-3 rounded-md w-full focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
