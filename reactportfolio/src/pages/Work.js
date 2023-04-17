import React from "react";

function Work() {
  const projects = [
    {
      id: 1,
      name: "Discover Denver",
      desc: "A social media app to help users discover and review Denver attractions!",
      link: "https://github.com/miamauro/discovering-denver",
    },
    {
      id: 2,
      name: "Employee Manager",
      desc: "An easy to use command line tool to keep track of departments, positions, salaries, managers, and employees utilizing mySQL.",
      link: "https://github.com/Twray95/employeeManager",
    },
    {
      id: 3,
      name: "E-Commerce Backend",
      desc: "An E-Commerce database solution utilizing Sequelize and mySQL to organize Categories, Products, Tags, and Product-Tag relation tables.",
      link: "https://github.com/Twray95/e-CommerceBackEnd/tree/main/models",
    },
    {
      id: 4,
      name: "Social Media Database",
      desc: "This app utilizes Mongoose and MongoDB to store Users, user Thoughts, thought Reactions, and user Friends.  It is a great example of how MongoDB's more freeform database structure can be used to store information in documents and sub documents.",
    },
    {
      id: 5,
      name: "Note Taker",
      desc: "This website allows the user to make notes as needed.  The app utilizes a sql database to store the notes taken and is actively deployed using Heroku!",
      link: "https://github.com/Twray95/noteTaker",
    },
  ];

  return (
    <>
      <div className="d-flex flex-wrap vh-100">
        {projects.map((project) =>
          project.id === 1 ? <div>Large Card</div> : <div>Small Card</div>
        )}
        <div className="m-3">
          <header>Discover Denver</header>
          <main>
            A social media app to help user discover and review denver
            attractions.{" "}
          </main>
          <footer>Link</footer>
        </div>
      </div>
    </>
  );
}

export default Work;
