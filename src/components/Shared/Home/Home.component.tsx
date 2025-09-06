
import Footer from "./Footer/Footer.component"
import Navbar from "./NavBar/NavBar.component";
import HeroSection from "./HeroSection/HeroSection";
import styles from "./Home.module.scss"

const Home = () => {


  return (
    <div className={`${styles.mainContainer}`}>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Home
