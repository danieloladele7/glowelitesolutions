import Nav from "./components/Nav";
import { Helmet } from "react-helmet";
import {
  Hero,
  AboutUs,
  OurSolutions,
  Testimonials,
  CallToAction,
  ContactUs,
  Footer,
} from "./sections";

const App = () => (
  <main id="main" className="relative">
    <Helmet>
      <title>GLOWELITE SOLUTION LLC</title>
      <meta
        name="Glowelite Solutions LLC owned by Dr. Gloria Otito Izu"
        content="We are dedicated to advancing biomedical innovation, educational technology, and sustainable AgriBio solutions. Our mission is to transform natural product discoveries into life-changing therapies, deliver cutting-edge consulting services, and empower communities through digital learning, scientific research, and capacity-building."
      />
    </Helmet>
    <Nav />
    {/* <section className="xl:padding-1 wide:padding-r padding-b"> */}
    <section className="">
      <Hero />
      <section className="">
        <AboutUs />
      </section>
      <section className="">
        <OurSolutions />
      </section>
      <section className="">
        <Testimonials />
      </section>
      <section className="">
        <CallToAction />
      </section>
      <section className="">
        <ContactUs />
      </section>
      <section className="">
        <Footer />
      </section>
    </section>
  </main>
);

export default App;
