'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';

const Navbar = () => {
  const navbarVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const logoVariants = {
    hidden: { rotate: -90, scale: 0.8, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <motion.nav
      className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href="/" className="flex items-center gap-1">
          <motion.div variants={logoVariants}>
            <Image
              src="/logo.mp4"
              width={50}
              height={50}
              alt="CybraneX logo"
              className="max-sm:size-10"
            />
          </motion.div>
          {/* <motion.p 
            className="text-[26px] font-extrabold text-white max-sm:hidden"
            variants={itemVariants}
          >
            CybraneX
          </motion.p> */}
        </Link>
      </motion.div>

      <motion.div 
        className="flex-between gap-5"
        variants={itemVariants}
      >
        <SignedIn>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <UserButton afterSignOutUrl="/sign-in" />
          </motion.div>
        </SignedIn>
        <MobileNav />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;