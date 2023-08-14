import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <WhatsNew />
    <Insights />
    {/* <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer /> */}
  </div>
);

export default Page;
