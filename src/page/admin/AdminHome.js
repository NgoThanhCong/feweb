import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import NavBar from "../../NavBar";

const styles = {
  section: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "#fff",
    padding: "0 2em",
  },
  wrapper: {
    textAlign: "center",
    maxWidth: "950px",
    margin: "0 auto",
    border: "5px solid #e6e6e6",
    padding: "40px 25px",
    marginBottom: "20px",
    paddingBottom: "10px"
  },
  avatar: {
    margin: "-40px auto 0px",
    width: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  quote: {
    lineHeight: 1.5,
    fontWeight: 300,
    marginBottom: "25px",
    fontSize: "1.375rem",
  },
  name: {
    marginBottom: "0",
    fontWeight: 600,
    fontSize: "1rem",
  },
  position: { fontWeight: 400 },
  body: {
    fontFamily: ("Montserrat", "sans-serif"),
    lineHeight: "1.7",
    color: "#333",
    backgroundColor: "#ffffff",
    overflowX: "hidden",
  },
};

export default function AdminHome() {
  return (
    <>
      <NavBar />
      <Container className="mt-3">
        <section style={styles.section}>
          <h1 className="text-center">Recent Idea</h1>
          <div style={styles.wrapper}>
            <img
              src="https://www.predicthq.com/icons/large/event-cat-lg/icon-lg-festivals.svg"
              alt="Festival"
              style={styles.avatar}
            />
            <div>
              <h3>Vietnam Int'l Cafe Show 2023</h3>
            </div>
            <p style={styles.position}>
              VietNam
              <p style={styles.name}>FESTIVAL & FOOD</p>
            </p>
          </div>

          <div style={styles.wrapper}>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 style={{ marginLeft: "250px" }}>
                    Global Sourcing Fair Vietnam 2023
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <div style={styles.wrapper}>
                    <img
                      src="https://www.predicthq.com/icons/large/event-cat-lg/icon-lg-expos.svg"
                      alt="Expos"
                      style={styles.avatar}
                    />
                    {/* <svg viewBox="0 0 24 24" style={styles.avatar}>
                      <path
                        fill="#2e1091"
                        d="M21.5 4H13V1h-2v3H2.5A1.5 1.5 0 001 5.5v12A1.5 1.5 0 002.5 19h6.31L7.1 22.57l1.8.86L11 19h2l2.13 4.43 1.8-.86L15.19 19h6.31a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0021.5 4zM21 17H3V6h18z"
                      ></path>
                      <path
                        fill="#ff2364"
                        d="M5.27 14.18V9h3.56v1H6.41v1h2.08v1H6.41v1.14h2.42v1zm8.9 0h-1.32l-1.13-1.93-1.1 1.93H9.36L11 11.47 9.44 9h1.33l1 1.76 1-1.76H14l-1.61 2.54zm.69 0V9h2.48a1.76 1.76 0 01.66.12 1.58 1.58 0 01.5.34 1.55 1.55 0 01.31.53 2 2 0 010 1.36 1.5 1.5 0 01-.31.52 1.61 1.61 0 01-.5.35 1.76 1.76 0 01-.66.12H16v1.89zM16 11.3h1.2a.55.55 0 00.4-.13.5.5 0 00.15-.39v-.33a.46.46 0 00-.15-.38.56.56 0 00-.4-.14H16z"
                      ></path>
                    </svg> */}
                    <div>
                      <h3>Global Sourcing Fair Vietnam 2023</h3>
                    </div>
                    <p style={styles.position}>
                      Vietnam
                      <p style={styles.name}> EXPO & HOUSEHOLD</p>
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div style={styles.wrapper}>
            <img
              src="https://www.predicthq.com/icons/large/event-cat-lg/icon-lg-concerts.svg"
              alt="Expos"
              style={styles.avatar}
            />
            {/* <svg viewBox="0 0 24 24" style={styles.avatar}>
              <path
                fill="#ff2364"
                d="M9 8.18V13a2 2 0 102 2V9.82l3-.6V11a2 2 0 102 2V6.78z"
              ></path>
              <path
                fill="#2e1091"
                d="M12 23a11 11 0 01-5.86-1.69L3 21.85a1.5 1.5 0 01-1.7-1.94L2.22 17a10.89 10.89 0 01-1.09-6.72A11.06 11.06 0 0111 1a11 11 0 111 22zm-5.41-3.8l.33.23A9 9 0 1011.17 3a9 9 0 00-7 13.4l.22.38-.93 2.92z"
              ></path>
            </svg>{" "} */}
            <div>
              <h3>Nurture x Liminal Dreams</h3>
            </div>
            <p style={styles.position}>
              The Observatory, 85 Cach Mang Thang Tam Street, District 1, Ho Chi
              Minh City, Viet Nam
              <p style={styles.name}> CONCERT & MUSIC</p>
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
