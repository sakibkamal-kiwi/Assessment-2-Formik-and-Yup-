import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("data");
    navigate("/login");
  };

  useEffect(() => {
    let login = localStorage.getItem("data");
    if (login) {
      navigate("/user/home");
    }
  }, []);
  return (
    <div>
      <button onClick={(e) => logout()}> Log out </button>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.w3schools.com/css/img_forest.jpg"
        />
      </Card>
    </div>
  );
};

export default Home;
