import React from "react";
import "./repo.css";
const Row = () => {
  return (
    <div className="repo-box">
      <img
        src={require("../../img/users/steve.jpg").default}
        alt="repo-owner-img"
        className="repo-img"
      />
      <div>
        <p className="repo-name">repo-name</p>
        <p className="repo-description">
          Mhjdaoihfoidahifhoaihfidhadoifhoiahdfoildhiofhdiahdihaoihdihdaifh
          Mhjdaoihfoidahifhoaihfidhadoifhoiahdfoildhiofhdiahdihaoihdihdaifh
        </p>
        <aside className="repo-secondary-info">
          <div className="repo-stars">
            <p>
              <ion-icon name="star-outline" style={{ color: "red" }}></ion-icon>{" "}
              700 stars
            </p>
          </div>
          <p className="repo-issues">Issues: 1.6k</p>
          <p className="repo-submit">Submitted 30 days ago by Mo</p>
        </aside>
      </div>
    </div>
  );
};

export default Row;
