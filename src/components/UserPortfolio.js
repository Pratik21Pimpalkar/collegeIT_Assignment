import React, { useContext } from "react";
import { UserContext } from "../context";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import moment from "moment";

const UserPortfolio = () => {
  const [state, setState] = useContext(UserContext);
  const params = useParams();

  
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    let days = moment([2019, 3, 5]).diff(moment([year, month, today]), "days");
    console.log(days);
    
  return (
    <Wrapper>
      {state.map((ele,key) => {
        return ele.name.first === params.name ? (
          <Card key={key}>
            <img src={ele.picture.large} alt={ele.name.first} />
            <Typography variant="h5">
              {ele.name.first} {ele.name.last}
            </Typography>
            <Typography variant="h6">Phone: {ele.cell}</Typography >
            <Typography variant="h6">Age: {ele.dob.age}</Typography >
            <Typography variant="h6">Days for birthday:
            { (ele.dob.date.slice(5,7)>month)?
            moment([year, ele.dob.date.slice(5,7), ele.dob.date.slice(8,10)]).diff(moment([year, month, today]), "days"): moment([year+1, ele.dob.date.slice(5,7), ele.dob.date.slice(8,10)]).diff(moment([year, month, today]), "days")}</Typography >
            <Typography variant="h6">State: {ele.location.state}</Typography >
            <Typography variant="h6">Country: {ele.location.country}</Typography >
          </Card>
        ) : (
          ""
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`;
const Card = styled.div`
  background-color: white;
  width: 25rem;
  height: fit-content;
  padding: 1.2rem;
  border-radius: 0.6rem;
  align-items: center;
  box-shadow: 1px 1px 20px 15px #c2c2c2db;
  display: flex;
  flex-direction: column;
  img {
    border-radius: 50%;
    width: 12rem;
  }
  h5{
    margin-top:0.7rem;
    font-size: 1.6rem;
  }
  h6 {
    margin: 0.2rem 0;
    font-size: 0.95rem;

  }
`;
export default UserPortfolio;
