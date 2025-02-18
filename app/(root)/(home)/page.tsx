'use client';

import { motion } from 'framer-motion';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      className="flex size-full flex-col gap-5 text-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.div 
        className="h-[303px] w-full rounded-[20px] bg-hero bg-cover"
        variants={childVariants}
      >
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:py-[20px] lg:px-10">
          <div className="flex flex-col py-2 gap-0.5">
            <motion.h1 
              className="text-4xl font-extrabold lg:text-6xl"
              variants={childVariants}
            >
              {time}
            </motion.h1>
            <motion.p 
              className="text-lg font-medium text-sky-1 lg:text-xl"
              variants={childVariants}
            >
              {date}
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div variants={childVariants}>
        <MeetingTypeList />
      </motion.div>
    </motion.section>
  );
};

export default Home;