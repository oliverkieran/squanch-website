import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, tag, tagColor} = feature;
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg p-4 xl:p-5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40"
      >
        <div className="flex items-center justify-center rounded-full bg-primary w-10 h-10 relative">
          <Image src={icon} width={20} height={20} alt="title" />
        </div>
        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-5 mb-2">
          {title}
        </h3>
        <div className={`inline-block px-2 py-1 mb-5 text-xs font-medium text-black bg-${tagColor} rounded`}>
          {tag}
        </div>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
