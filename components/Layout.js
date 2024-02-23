// import Header from './Header'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import Footer from './Footer'

 
export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <NavDesktop />
      <NavMobile />
        <main>{children}</main>
      <Footer />
    </>
  )
}

