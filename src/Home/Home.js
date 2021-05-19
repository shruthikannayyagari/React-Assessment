import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";


export const Container = styled.div`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

function Home() {
  const user = useSelector((state) => state.authentication.user);
  
  return (
    <Container className="col-lg-8 offset-lg-2">
      <h1>Hi {user.firstName}!</h1>
      <p>You're logged in.</p>
      <p>
        <Link to="/login">Logout</Link>
      </p>
    </Container>
  );
}

export default Home;
