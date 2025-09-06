
import { NavLink } from "react-router"
import styles from "./NavBar.module.scss"

interface MenuType {
  name: string
  url: string
}

const NavBar = ({}) => {

  const navLinks: MenuType[] = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Contact",
      url: "/contact"
    },
  ]

  return (
    <>
      <div className={`${styles.navbarContainer}`}>
        <div className={`${styles.logoContainer}`}>
          <span className={`${styles.logoFirst}`}>Write</span>
          <span className={`${styles.logoSecond}`}>Code</span>
        </div>

        <div className={`${styles.navLinkContainer}`}>
          {
            navLinks.map((item: MenuType)=>(<>
              <NavLink to={item.url} className={({isActive})=>isActive===true? `${styles.navLink} ${styles.active}`:`${styles.navLink}`}>{item.name}</NavLink>
            </>))
          }
        </div>
      </div>
    </>
  )
}

export default NavBar
