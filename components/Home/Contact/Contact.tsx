import AnimateIn from "@/components/Helper/AnimateIn";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="w-[85%] mx-auto max-w-5xl">
        <p className="text-accent-purple-light text-xs font-semibold tracking-[0.25em] uppercase mb-3">Contact</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-12">Let&apos;s Connect</h2>

        <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-10 xl:gap-14 items-start">
          <AnimateIn animation="fade" direction="left">
            <ContactForm />
          </AnimateIn>
          <AnimateIn animation="fade" direction="right" delay={0.1}>
            <ContactInfo />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
