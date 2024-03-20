import React, { Component } from "react";
import Fade from "react-awesome-reveal";
import { Row, Col, Card, Typography, Button, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import pic1 from "../images/pic1.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";

const { Title } = Typography;

class Portfolio extends Component {
  handleButtonClick = (repositoryUrl) => {
    window.open(repositoryUrl, "_blank");
  };

  render() {
    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <Title level={2} className="title">
            BELOW ARE SOME OF MY PROJECTS
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Card
                className="custom-card"
                style={{ margin: "0 8px", height: "100%" }}
              >
                <img
                  src={pic1}
                  className="card-img-top"
                  alt="ABC Jobs"
                  width={398}
                  height={400}
                />
                <div className="card-body" style={{ padding: 0 }}>
                  <h5 className="card-title">ABC Jobs Pte Ltd</h5>
                  <hr />
                  <p
                    className="card-text"
                    style={{
                      textAlign: "justify",
                      fontWeight: "normal",
                      fontSize: "16px",
                      fontFamily: "'opensans', sans-serif",
                    }}
                  >
                    A web-based application that allows users to find employment
                    opportunities and submit job applications.
                  </p>
                  <Space wrap>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "#0275d8", color: "#0275d8" }}
                    >
                      Spring Framework
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "red", color: "red" }}
                    >
                      JSP
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "green", color: "green" }}
                    >
                      CSS
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "violet", color: "violet" }}
                    >
                      JavaScript
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "purple", color: "purple" }}
                    >
                      MySQL
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "orange", color: "orange" }}
                    >
                      Apache
                    </Button>
                  </Space>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="github-button"
                      style={{ backgroundColor: "#34495e" }}
                      onClick={() =>
                        this.handleButtonClick(
                          "https://github.com/lensalig/abcjobs.git"
                        )
                      }
                    >
                      <GithubOutlined style={{ marginRight: "8px" }} />
                      View Source Code
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Card
                className="custom-card"
                style={{ margin: "0 8px", height: "100%" }}
              >
                <img
                  src={pic3}
                  className="card-img-top"
                  alt="KYN"
                  width={398}
                  height={400}
                />
                <div className="card-body" style={{ padding: 0 }}>
                  <h5 className="card-title">KYN | Know Your Neighborhood</h5>
                  <hr />
                  <p
                    className="card-text"
                    style={{
                      textAlign: "justify",
                      fontWeight: "normal",
                      fontSize: "16px",
                      fontFamily: "'opensans', sans-serif",
                    }}
                  >
                    A web-based application that allows users to input store
                    information and showcase all the added stores within their
                    local area.
                  </p>
                  <Space wrap>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "#0275d8", color: "#0275d8" }}
                    >
                      Spring Framework
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "red", color: "red" }}
                    >
                      JSX
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "green", color: "green" }}
                    >
                      CSS
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "violet", color: "violet" }}
                    >
                      JavaScript
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "purple", color: "purple" }}
                    >
                      MySQL
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "#813300", color: "#813300" }}
                    >
                      ReactJS
                    </Button>
                  </Space>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="github-button"
                      style={{ backgroundColor: "#34495e" }}
                      onClick={() =>
                        this.handleButtonClick(
                          "https://github.com/lensalig/kyn.git"
                        )
                      }
                    >
                      <GithubOutlined style={{ marginRight: "8px" }} />
                      View Source Code
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
           
            <Col xs={24} sm={12} md={8} lg={8}>
              <Card
                className="custom-card"
                style={{ margin: "0 8px", height: "100%" }}
              >
                <img
                  src={pic4}
                  className="card-img-top"
                  alt="Meals On Wheels"
                  width={398}
                  height={400}
                />
                <div className="card-body" style={{ padding: 0 }}>
                  <h5 className="card-title">Meals On Wheels</h5>
                  <hr />
                  <p
                    className="card-text"
                    style={{
                      textAlign: "justify",
                      fontWeight: "normal",
                      fontSize: "16px",
                      fontFamily: "'opensans', sans-serif",
                    }}
                  >
                    A web-based application designed to serve the charitable
                    mission of "MerryMeal." This application is dedicated to
                    provide meal servicess.
                  </p>

                  <Space wrap>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "#0275d8", color: "#0275d8" }}
                    >
                      Spring Framework
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "red", color: "red" }}
                    >
                      JSX
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "green", color: "green" }}
                    >
                      CSS
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "violet", color: "violet" }}
                    >
                      JavaScript
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "purple", color: "purple" }}
                    >
                      MySQL
                    </Button>
                    <Button
                      shape="round"
                      type="default"
                      ghost
                      style={{ borderColor: "#813300", color: "#813300" }}
                    >
                      ReactJS
                    </Button>
                  
                  </Space>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="github-button"
                      style={{ backgroundColor: "#34495e" }} // Updated color
                      onClick={() =>
                        this.handleButtonClick(
                          "https://github.com/Waisnu/MerryMeals-Project.git"
                        )
                      }
                    >
                      <GithubOutlined style={{ marginRight: "8px" }} />
                      View Source Code
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
