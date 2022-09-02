import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";


const Header = () => {
  const userObject = useSelector((state) => state.userState[0])
  if (userObject.name === ''){
    userObject.name = "Please log in to hear your emails"
    userObject.imageUrl = "https://cdn.dogsplanet.com/wp-content/uploads/2022/07/A-dog-floating-in-space-upscaled.jpg"
    } 
      
  return (

  <div className="container-fluid">
     <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container">
          {/* <h1 className="navbar-brand">Email to Speech</h1> */}
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">EMAIL to SPEECH</h2>
              <h4 className="card-subtitle mb-2 text-muted">{userObject.name}</h4>
              <img className="card-img-bottom user-image" src={userObject.imageUrl} alt={userObject.name} />
            </div>
          </div>
          <div className="navbar-nav" >
      
          <div className="nav-item nav-btn"><Login /></div> 
          <div className="nav-item nav-btn"><Logout /></div> 
          </div>
        </div>
      </nav>
          <User />
  </div>
    )
};

export default Header;
