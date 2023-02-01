import { About, GetStarted, Hero, Collaborators, Awards } from '../sections';
import { Slider } from '../components';

const Page = () => (
  <>
    <Hero />
    <About />
    <GetStarted />
    <Awards />
    {/* <Slider /> */}
    <Collaborators />
    <div className="bg-primary-black h-[.8rem]" />
  </>
);

export default Page;
