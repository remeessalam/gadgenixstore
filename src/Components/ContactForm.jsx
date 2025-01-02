import { useForm } from "react-hook-form";
import { cantactusimage, contactusicons } from "../constant";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  const subjects = [
    "General Inquiry",
    "Technical Support",
    "Business Proposal",
    "Other",
  ];

  return (
    <div className=" bg-black text-white spacebetween">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div
            className="space-y-8 w-full h-full p-4 rounded-xl bg-current bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${cantactusimage})` }}
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Have Something In Mind?
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold">
                Let&apos;s Talk.
              </h2>
            </div>

            <div className="space-y-6">
              <img
                src={contactusicons}
                alt="contactusicons"
                className="w-16 h-fit max-h-[60px]"
              />
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <IoLocationSharp className="text-white" />
                </div>
                <p className="text-gray-300">
                  No 1,Raja Kidangu Street Thimiri, Vellore 632 512
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <BiSolidPhoneCall className="text-white" />

                <p className="text-gray-300">+91 - 7010916928</p>
              </div>

              <div className="flex items-center space-x-4">
                <IoMail className="text-white" />

                <p className="text-gray-300">Mail-Gadgetsstore@gmail.Com</p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className=" px-8 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-headerbgcolor rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full bg-headerbgcolor rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  {...register("subject", {
                    required: "subject is required",
                  })}
                  className="w-full bg-headerbgcolor rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Message..."
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-headerbgcolor rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                  className="rounded bg-headerbgcolor border-gray-600 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-sm text-gray-300">
                  I Accept Your Terms & Conditions
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
              )}

              <button type="submit" className="primary-btn">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
