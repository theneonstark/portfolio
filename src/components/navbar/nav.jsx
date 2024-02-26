import "./nav.scss";
import "boxicons";
import { motion } from "framer-motion";
import Side from "../side/Side";

const nav = () => {
  return (
    <div className="nav">
      {/* {Sidebar} */}
      <Side />
      <div className="header">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          StarK
        </motion.span>
        <div className="links">
          <a href="#">
            <box-icon
              type="logo"
              color="#316ff6"
              name="facebook-square"
            ></box-icon>
          </a>
          <a href="#">
            <box-icon
              type="logo"
              color="#0077b5"
              name="linkedin-square"
            ></box-icon>
          </a>
          <a href="#">
            <box-icon
              type="logo"
              color="#d62976"
              name="instagram-alt"
            ></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="github"></box-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default nav;
