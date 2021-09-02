import axios from "axios";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    async function getRepos() {
      const data = await axios
        .get(
          "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2"
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log("error --> ", e);
        });
    }
    getRepos();
  }, []);
  return (
    <div style={{ width: "120rem", margin: "0 12rem" }}>
      <img
        style={{ width: "30rem" }}
        src={require("../img/github animation.jpg").default}
      />
      <img
        style={{ width: "30rem" }}
        src={require("../img/repo.jpg").default}
      />
    </div>
  );
};

export default Test;
