import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

import Request from '../../services/http';
import ApplicationThumb from "../../assets/images/application-thumbnail.png";
import CardChart from "../../assets/images/card-chart.png";
import CardShapes from "../../assets/images/card-shapes.png";
import "./style.scss";

const ApplicationDetails = () => {
    const params = useParams();
    const [details, updateDatails] = useState({});

    useEffect(() => {
        const getDetails = async () => {
            try {
                const { status, data } = await Request.get(`/application/getApplication?id=${params.id}`);

                if (status === 200) {
                    updateDatails(data.results);
                }
            } catch(e) {
                console.log(e)
            }
        };

        getDetails();
    }, [params.id]);
    return <div className="application-details">
        <Container>
            <Row>
                <Col><h2 className="aplication-name">{details.name}</h2></Col>
            </Row>

            <Row>
                <Col md={4}>
                    <div className="left-content">
                        <img src={ApplicationThumb} alt="application thumbnail" />
                        <Button variant="primary">Summary</Button>
                    </div>
                </Col>

                <Col md={8}>
                    <div className="right-content">
                        <div className="content-header">
                            <h2>Summary</h2>
                            <p>Application Information</p>
                        </div>

                        <Row>
                            <Col sm={6}>
                                <div className="card left">
                                    <p>Utilzation</p>
                                    <img src={CardChart} alt="Card Chart"/>
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div className="card right">
                                    <p>Category</p>
                                    <img src={CardShapes} alt="Card Shapes"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
};

export default ApplicationDetails;
