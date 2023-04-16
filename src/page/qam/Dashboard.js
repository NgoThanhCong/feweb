import React from "react";
import { Navbar, Nav, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const styles = {
    avatar: {
      margin: "auto",
      width: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "0",
    }
}

function Dashboard() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <img src="https://fpt.edu.vn/Content/images/assets/2022-Greenwich-Eng.jpg" alt="" style={styles.avatar} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={`/QamIdeas`}>View Ideas</Nav.Link>
                        <Nav.Link as={Link} to={`/CatEditor`}>Category</Nav.Link>
                        <Nav.Link active>Dashboard</Nav.Link>
                    </Nav>
                    <Nav.Link href={`Login`} style={{alignItems: "center", display:"flex", justifyContent: "center", fontSize:20, width:100, color:"white"}} className="btn btn-danger">
                        <BsBoxArrowInRight/> <a style={{ marginLeft: '.5rem' }}>Logout</a> 
                    </Nav.Link>
                </Container>
            </Navbar>

            <section className="container">
                <div class="chartjs-render-monitor" style={{display:"block", width:"726px", height:"363px"}}>
                    <Table>
                        <tr>
                            <th>
                                <Bar 
                                    data={{
                                        labels: ["Sports", "Education", "Propose Change"],
                                        datasets: [
                                            {
                                                label: "Idea counts for each Category",
                                                backgroundColor: ["#0000FF", "#DEB887", "#008B8B"],
                                                data: [122, 400, 53]
                                            }
                                        ]
                                    }}
                                />
                            </th>
                            <th>
                                <Doughnut 
                                    data={{
                                        labels: ["Sports", "Education", "Propose Change"],
                                        datasets: [
                                            {
                                                label: "Idea counts for each Category",
                                                backgroundColor: ["#0000FF", "#DEB887", "#008B8B"],
                                                data: [122, 400, 53]
                                            }
                                        ]
                                    }}
                                />
                            </th>
                        </tr>
                    </Table>
                    <br/>
                    <Line 
                        data={{
                            labels: [2017, 2018, 2019, 2020, 2021, 2022],
                            datasets: [
                                {
                                    data: [5, 12, 21, 27, 34, 23],
                                    label: "Sports idea counts",
                                    borderColor:"#FF7F50",
                                    fill: false
                                },
                                {
                                    data: [43, 60, 83, 54, 67, 93],
                                    label: "Education idea counts",
                                    borderColor:"#8B008B",
                                    fill: false
                                },
                                {
                                    data: [2, 6, 10, 8, 11, 16],
                                    label: "Q&A idea counts",
                                    borderColor:"#483D8B",
                                    fill: false
                                },
                            ]
                        }}
                    />
                </div>
            </section>
        </>
    )
}

export default Dashboard;