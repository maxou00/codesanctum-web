import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch with the Guardians of the Code"
        description="Get in touch with the guardians of coding knowledge. Whether you have a question, feedback, or just want to say hello, we're here to help you on your coding journey."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
