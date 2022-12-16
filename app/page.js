import { Footer, Navbar } from "../components";
import { About, GetStarted, Hero, Collaborators, Awards } from "../sections";

const Page = () => (
  <>
    <Hero />
    <About />
    <GetStarted />
    <Awards />
    <Collaborators />
    <div className="bg-primary-black h-[.8rem]"></div>
  </>
);

export default Page;
