import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axiosInstance from "./axios/axiosInstance";

function App() {
  const [userList, setUserList] = useState([]);
  const getUserList = () => {
    axiosInstance
      .get("/posts")
      .then((result) => {
        setUserList(result);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <>
      {
        <ul>
          {userList?.map((item) => {
            return <li>{item?.id}</li>;
          })}
        </ul>
      }
    </>
  );
}

export default App;
