import { useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiTool, FiImage, FiMail } from "react-icons/fi";

const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 1,
    },
  };

  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);

  const items = [
    { label: "Home", icon: <FiHome /> },
    { label: "E-book", icon: <FiUser /> },
    { label: "Audio", icon: <FiTool /> },
    { label: "Video", icon: <FiImage /> },
    { label: "Magazine", icon: <FiMail /> },
    { label: "More Views" },
    {
      label: "Categories",
      icon: <FiMail />,
      isExpandable: true,
      subItems: [
        { label: "Category 1" },
        { label: "Category 2" },
        { label: "Category 3" },
      ],
    },
  ];

  const handleCategoriesClick = () => {
    setIsCategoriesExpanded((prevValue) => !prevValue);
  };

  return (
    <div className="links">
      {items.map((item) => (
        <motion.div
          className="link-wrapper"
          key={item.label}
          variants={variants}
        >
          <motion.a
            href={`#${item.label}`}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={0.95}
            onClick={item.isExpandable ? handleCategoriesClick : undefined}
          >
            {item.icon && item.icon} {/* Render icon if it exists */}
            {item.label}
          </motion.a>
          {item.label === "Categories" && isCategoriesExpanded && (
            <motion.div
              className="dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {item.subItems.map((subItem) => (
                <a href={`#${subItem.label}`} key={subItem.label}>
                  {subItem.label}
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Links;