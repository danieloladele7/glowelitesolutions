import { facebook, linkedIn, whatsApp, instagram, handshake, here, ideaSharing, lightAutomation, management, toDo, ticTacToe, greenEarth} from "../assets/icons";
import { drMatthew, miriam, tony } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#our-solutions", label: "Our Solutions" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact-us", label: "Contact Us" },
];

export const ourSolutions = [
    {
        imgURL: lightAutomation,
        label: "Biomedical Innovation",
        subtext: "natural product drug discovery, bioassay development, computational biology, data analysis."
    },
    {
        imgURL: handshake     ,
        label: "Educational Technology",
        subtext: "digital learning platforms, curriculum development, training tools."
    },
    {
        imgURL: greenEarth,
        label: "AgriBio Solutions",
        subtext: "biotech integration in agriculture, food security strategies, sustainability consulting."
    },
    {
        imgURL: toDo,
        label: "Consulting Services",
        subtext: "project management, regulatory compliance, scientific writing, grant development, capacity-building."
    },
    {
        imgURL: ticTacToe,
        label: "Education and Training",
        subtext: "We provide education and training that links agritech and biotech industries with research to drive innovation."
    },
    {
        imgURL: here,
        label: "Market Entry Consulting",
        subtext: "Develop strategies for launching your agritech-biotech products in new markets, focusing on regulatory compliance and consumer needs."
    },
];

export const testimonials = [
    { 
        imgURL: miriam,
        label: "Dr. Miriam, Head of Biomedical Projects",
        company: "BioNova Research",
        subtext: "Glowelite Solutions LLC brings exceptional expertise in biomedical innovation. Their team provided rigorous research support, advanced analytical insights, and delivered results that significantly strengthened our project outcomes. They are a trusted partner in scientific collaboration."
    },
    { 
        imgURL: tony,
        label: "Mr. Anthony, Director EduTech Innovation",
        company: "EduTech Bridge Int.",
        subtext: "Partnering with Glowelite Solutions LLC on an ed-tech initiative was a game-changer. They combined innovative digital tools with practical training solutions, empowering our team and expanding our impact. Their vision for integrating science, technology, and education is inspiring."
    },
    { 
        imgURL: drMatthew,
        label: "Dr. Matthew, CEO Matrosy LLC",
        company: "Matrosy LLC",
        subtext: "The consulting services we received from Glowelite Solutions LLC were transformative. Their strategic guidance in project management and regulatory compliance helped us streamline operations and achieve measurable success. Their professionalism and attention to detail are unmatched."
    },
];

export const statistics = [
    { 
        icon: ideaSharing,
        value: '5', 
        label: 'Customers'
    },
    { 
        icon: handshake,
        value: '7', 
        label: 'Partners'
    },
    { 
        icon: management,
        value: '12', 
        label: 'Solutions'
    },
];

export const contactUs = [
    { 
        label: "Address",
        subtext: "6403 Sierra Bianca Dr, Apt 1720, Houston TX 77083",
        link: "#"
    },
    { 
        label: "Email",
        subtext: "admin@glowelitesolutions.com",
        link: "mailto:admin@glowelitesolutions.com"
    },
    { 
        label: "Phone",
        subtext: "+18325206484",
        link: "tel:+18325206484"
    },
];

export const socialMedia = [
    {
        href: "#",
        src: facebook,
        alt: "facebook logo"

    },
    {
        href: "#",
        src: linkedIn,
        alt: "linkedin logo"

    },
    {
        href: "#",
        src: instagram,
        alt: "instagram logo"

    },
    {
        href: "#",
        src: whatsApp,
        alt: "whatsapp logo"

    },
];
