import AnimateIn from "@/components/Helper/AnimateIn";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-primary-bg">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        <AnimateIn animation="fade" direction="left">
          <ContactForm />
        </AnimateIn>
        <AnimateIn animation="fade" direction="right" delay={0.1} className="xl:mx-auto">
          <ContactInfo />
        </AnimateIn>
      </div>
    </section>
  );
};

export default Contact;
