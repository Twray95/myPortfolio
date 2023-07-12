import React from "react";

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-lg-8 align-middle">
          <main className="text-center">Hello, my name is Thomas Wray</main>
          <section className="text-center align-bottom">
            I am a new full stack developer and I'm excited to learn and grow in
            this field. Some of the apps that I know include Node.js, Express,
            Sequelize, SQL, MongoDB, GraphQl, and much more.
          </section>
        </div>
        <div className="col-lg-4 mainImgCon">
          <img className="meImg" src="me.png"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
