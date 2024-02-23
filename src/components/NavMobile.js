import { useRef } from "react";
import { useState } from "react";
import { routes } from "@/routes";
import { useClickAway } from "react-use";
import { StyledNavLink } from "./NavDesktop";
import {Squash as Hamburger} from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false)
  const router = useRouter();
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false)) // close menu when user clicks outside of it

  return (
    // <div className="flex flex-row-reverse">
    <div ref={ref} className="lg:hidden flex flex-row-reverse">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.2}}
        className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
          <ul className="grid gap-2">
            {routes.map((route, idx) => {
              const {scroll, href, title} = route;

              return (
                <motion.li
                  initial={{scale: 0, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  transition={{
                    type: "spring", 
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={title}
                  className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <StyledNavLink 
                    onClick={() => setOpen((prev) => !prev)}
                    href={href}
                    scroll={scroll}
                    className={"flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"}
                    >
                      {title}
                    </StyledNavLink>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
    // </div>
  )
}

// was wrapped in motion.li