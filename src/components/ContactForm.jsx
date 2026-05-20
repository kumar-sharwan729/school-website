import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xojbvqzq");

  if (state.succeeded) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-green-600">
          Message Sent Successfully!
        </h2>
        <p className="mt-2 text-gray-600">
          Thank you for contacting us. We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 bg-dark-100">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mobile number"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter subject"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}