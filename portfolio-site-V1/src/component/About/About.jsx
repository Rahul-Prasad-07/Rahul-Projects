import React from "react";
import { useState, useEffect } from "react";
import "./About.scss";

export const About = () => {
  const [abouts, setAbouts] = useState([]);

  return (
    <>
      <h2 className="head-textt">
        {" "}
        My goal is to learn and contribute more & more to build better world for
        <span> next generation</span>{" "}
      </h2>

      <div className="about__profiles">
        <div
          className="about__profile-item"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img
            src="https://appinventiv.com/wp-content/uploads/sites/1/2022/11/blockchain-in-travel-industry.webp"
            alt="frontend"
            className="abtlogo"
          />

          <h2 className="abthead" style={{ marginTop: 20 }}>
            {" "}
            Blockchain Development
          </h2>
          <hr />
          <p className="abtdesc" style={{ marginTop: 25 }}>
            {" "}
            I will make a responsive, clean and eye catching interface for the
            user with React, HTML, CSS, and other latest technologies.
          </p>
        </div>

        <div
          className="about__profile-item"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4BIyfi56ZWu8Yq6wytSRjIeLMjBymb-COsIzFrGPi45vuB26AhIIG09N5ZMEv4e7eyU&usqp=CAU"
            alt="frontend"
            className="abtlogo"
          />

          <h2 className="abthead" style={{ marginTop: 20 }}>
            {" "}
            Frontend Development
          </h2>
          <hr />
          <p className="abtdesc" style={{ marginTop: 25 }}>
            {" "}
            I will make a responsive, clean and eye catching interface for the
            user with React, HTML, CSS, and other latest technologies.
          </p>
        </div>

        <div
          className="about__profile-item"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img
            src="https://media.istockphoto.com/id/1161702497/vector/team-of-programmer-concept-with-devops-software-development-practices-methodology-vector.jpg?s=612x612&w=0&k=20&c=5cqLQaudaYaXv3OdYQHjt-F-LhcuOiBhXWtHLMwj4PU="
            alt="frontend"
            className="abtlogo"
          />

          <h2 className="abthead" style={{ marginTop: 20 }}>
            {" "}
            DevOps Enthuthiastic
          </h2>
          <hr />
          <p className="abtdesc" style={{ marginTop: 25 }}>
            {" "}
            I will make a responsive, clean and eye catching interface for the
            user with React, HTML, CSS, and other latest technologies.
          </p>
        </div>

        <div
          className="about__profile-item"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoTIIQJGfzOWEeRFjfkxmv1rPUj7sdW-CGg&usqp=CAU"
            alt="frontend"
            className="abtlogo"
          />

          <h2 className="abthead" style={{ marginTop: 20 }}>
            {" "}
            Technical Writer
          </h2>
          <hr />
          <p className="abtdesc" style={{ marginTop: 25 }}>
            {" "}
            I will make a responsive, clean and eye catching interface for the
            user with React, HTML, CSS, and other latest technologies.
          </p>
        </div>
      </div>
    </>
  );
};
