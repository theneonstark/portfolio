import { useState } from "react";
import { motion } from "framer-motion";
import "./Side.scss";
import Button from "./button/Button";
import Links from "./links/Links";

const Side = () => {
  const [open, setOpen] = useState(false);

  const variant = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="side" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variant}>
        <Links/>
      </motion.div>
      <Button setOpen={setOpen}/>
    </motion.div>
  );
};

export default Side;
