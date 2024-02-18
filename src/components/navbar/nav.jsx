import "./nav.scss";
import 'boxicons';


const nav = () => {
  return (
    <div className="nav">
      {/* {Sidebar} */}
      <div className="header">
        <span>StarK</span>
        <div className="links">
          <a href="#"><box-icon type='logo' color="#316ff6" name='facebook-square'></box-icon></a>
          <a href="#"><box-icon type='logo' color="#0077b5" name='linkedin-square'></box-icon></a>
          <a href="#"><box-icon type='logo' color="#d62976" name='instagram-alt'></box-icon></a>
          <a href="#"><box-icon type='logo' name='github'></box-icon></a>
        </div>
      </div>
    </div>
  )
}

export default nav

