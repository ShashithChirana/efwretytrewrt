import banner from '../../assets/banner.svg'
import Banner from '../../shared/Banner';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
          
      <Banner banner={banner} heading="Drive with confidence anytime, anywhere." subheading="All of you can register here as a driving school after getting the 
      approval from Motor Traffic Division and carry out the work through online technology.
                This will make it easier to produce good drivers for the society." btn1={'Get Started'} btn2={"Get the MTD Approval"}/>
    </div>

  );
};

export default Home;