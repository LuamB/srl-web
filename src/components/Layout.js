import { routes } from '../pages/routes'
// import Header from './Header'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import Footer from './Footer'
import { Ubuntu_Mono } from "next/font/google"

const ubuntuMono = Ubuntu_Mono({weight: ['400', '700'], subsets:['latin']})
 
export default function Layout({ children }) {
  return (
    <>
        {console.log("Layout re-rendered")}

      <NavDesktop />
      <NavMobile />
          <main className={`min-h-screen bg-neutral-800 text-neutral-200 ${ubuntuMono.className}`}>
            {children}
          </main>
      <Footer />
    </>
  )
}

