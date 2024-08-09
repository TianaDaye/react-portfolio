import { FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiXcode } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { motion } from "framer-motion";
import { useTransition } from "react";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10], 
        transition: {
            duration: duration, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "reverse",
        },
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl"> Technologies</motion.h2>
        <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                animate={{ y: [10, -10] }}
                transition={{
                    duration: 2.5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFigma className="text-7xl text-purple-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-white"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3 className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobeillustrator className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobeindesign className="text-7xl text-pink-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobephotoshop className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobepremierepro className="text-7xl text-purple-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiXcode className="text-7xl text-blue-800"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJirasoftware className="text-7xl text-blue-700"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies