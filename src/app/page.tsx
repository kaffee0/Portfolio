'use client';

import { MenuCard } from "@/components/MenuCard";
import { motion } from "framer-motion";

export default function Home() {
  const menuItems = [
    { title: "Cheng Du Chili Sauce", price: "$16.95", starColor: 'yellow' as const, sour: 20, sweet: 30, salt: 60, spicy: 90 },
    { title: "Dry Sauteed Green Beans", price: "$9.25", starColor: 'blue' as const, sour: 10, sweet: 20, salt: 50, spicy: 40 },
    { title: "Shrimp", price: "$8.55", starColor: 'red' as const, sour: 15, sweet: 40, salt: 45, spicy: 60 },
    { title: "Braised Chicken w/ Chili Sauce", price: "$9.25", starColor: 'yellow' as const, sour: 25, sweet: 35, salt: 55, spicy: 85 },
    { title: "Dan Dan Noodles", price: "$5.50", starColor: 'blue' as const, sour: 30, sweet: 25, salt: 70, spicy: 65 },
    { title: "Braised Chicken w/ Broccoli", price: "$8.50", starColor: 'red' as const, sour: 10, sweet: 30, salt: 50, spicy: 30 },
    { title: "Cheng Qing Juice Diced Chicken w/ Peanut and Pepper corn", price: "$13.95", starColor: 'yellow' as const, sour: 20, sweet: 45, salt: 40, spicy: 75 },
    { title: "Fried Bread", price: "$5.95", starColor: 'red' as const, sour: 5, sweet: 60, salt: 35, spicy: 10 },
    { title: "Sweet and Sour Chicken", price: "$8.50", starColor: 'red' as const, sour: 40, sweet: 90, salt: 30, spicy: 20 },
    { title: "Cheng Du Chili Sauce", price: "$16.95", starColor: 'yellow' as const, sour: 20, sweet: 30, salt: 60, spicy: 90 },
    { title: "Dry Sauteed Green Beans", price: "$9.25", starColor: 'blue' as const, sour: 10, sweet: 20, salt: 50, spicy: 40 },
    { title: "Shrimp", price: "$8.55", starColor: 'red' as const, sour: 15, sweet: 40, salt: 45, spicy: 60 },
    { title: "Braised Chicken w/ Chili Sauce", price: "$9.25", starColor: 'yellow' as const, sour: 25, sweet: 35, salt: 55, spicy: 85 },
    { title: "Dan Dan Noodles", price: "$5.50", starColor: 'blue' as const, sour: 30, sweet: 25, salt: 70, spicy: 65 },
    { title: "Braised Chicken w/ Broccoli", price: "$8.50", starColor: 'red' as const, sour: 10, sweet: 30, salt: 50, spicy: 30 },
    { title: "Cheng Qing Juice Diced Chicken w/ Peanut and Pepper corn", price: "$13.95", starColor: 'yellow' as const, sour: 20, sweet: 45, salt: 40, spicy: 75 },
    { title: "Fried Bread", price: "$5.95", starColor: 'red' as const, sour: 5, sweet: 60, salt: 35, spicy: 10 },
    { title: "Sweet and Sour Chicken", price: "$8.50", starColor: 'red' as const, sour: 40, sweet: 90, salt: 30, spicy: 20 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen p-4"
      style={{
        background: 'linear-gradient(135deg, #B8B8B8 0%, #D0D0D0 50%, #E8E8E8 100%)',
        fontFamily: 'var(--font-mplus-rounded)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-[1800px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <MenuCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
