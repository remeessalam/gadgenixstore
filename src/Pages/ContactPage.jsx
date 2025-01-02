import ContactForm from "../Components/ContactForm";
import Map from "../Components/Map";
import PageBanner from "../Components/PageBanner";
import { contactpagebanner } from "../constant";

const ContactPage = () => {
  return (
    <div>
      <PageBanner
        image={contactpagebanner}
        title="Contact Us"
        style="bg-center"
      />
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactPage;
