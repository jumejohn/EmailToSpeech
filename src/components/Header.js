import User from "./User";

const Header = () => {

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Email to Speech</h1>
        <User />
      </div>
    </div>
  );

};

export default Header;
