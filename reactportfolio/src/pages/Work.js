import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Work() {
  const projects = [
    {
      id: 1,
      name: "Discover Denver",
      desc: "A social media app to help users discover and review Denver attractions! Users can create profiles to add reviews and star rating to attractions",
      link: "https://github.com/miamauro/discovering-denver",
      deployment: "https://whispering-dawn-72162.herokuapp.com/",
      deployed: true,
    },
    {
      id: 2,
      name: "Employee Manager",
      desc: "An easy to use command line tool to keep track of departments, positions, salaries, managers, and employees utilizing mySQL.",
      link: "https://github.com/Twray95/employeeManager",
      deployed: false,
    },
    {
      id: 3,
      name: "E-Commerce Backend",
      desc: "An E-Commerce database solution utilizing Sequelize and mySQL to organize Categories, Products, Tags, and Product-Tag relation tables.",
      link: "https://github.com/Twray95/e-CommerceBackEnd/tree/main/models",
      deployed: false,
    },
    {
      id: 4,
      name: "Social Media Database",
      desc: "This app utilizes Mongoose and MongoDB to store Users, user Thoughts, thought Reactions, and user Friends.  It is a great example of how MongoDB's more freeform database structure can be used to store information in documents and sub documents.",
      link: "https://github.com/Twray95/socialMediaDB",
      deployed: false,
    },
    {
      id: 5,
      name: "Note Taker",
      desc: "This website allows the user to make notes as needed.  The app utilizes a sql database to store the notes taken and is actively deployed using Heroku!",
      link: "https://github.com/Twray95/noteTaker",
      deployment: "https://secret-ravine-96849.herokuapp.com/",
      deployed: true,
    },
    {
      id: 6,
      name: "Capture the Flag",
      desc: "This website allows users to play capture the flag games in their browser!  While there is still a lot of functionality that needs to be built out as we only had one week to build, still a good start.",
      link: "https://github.com/PaulGibes/CaptureTheFlag",
      deployment: "https://outsiders.herokuapp.com/",
      deployed: true,
    },
  ];

  return (
    <>
      <Container className="pt-5">
        <Row className="g-4">
          {projects.map((project) =>
            project.id === 1 ? (
              <Col md={4} sm={6}>
                <Card className="text-center h-100">
                  <Card.Header as="h3">{project.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>{project.desc}</Card.Text>
                    {project.deployed === true ? (
                      <ButtonGroup aria-label="Basic example">
                        <Button variant="primary" href={project.link}>
                          Github
                        </Button>
                        <Button variant="primary" href={project.deployment}>
                          Deployment
                        </Button>
                      </ButtonGroup>
                    ) : (
                      <Button href={project.link}>GitHub Link</Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              <Col md={4} sm={6}>
                <Card className="text-center h-100">
                  <Card.Header as="h3">{project.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>{project.desc}</Card.Text>
                    {project.deployed === true ? (
                      <ButtonGroup aria-label="Basic example">
                        <Button variant="primary" href={project.link}>
                          Github
                        </Button>
                        <Button variant="primary" href={project.deployment}>
                          Deployment
                        </Button>
                      </ButtonGroup>
                    ) : (
                      <Button href={project.link}>GitHub Link</Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Container>
    </>
  );
}

export default Work;
