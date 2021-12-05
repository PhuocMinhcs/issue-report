import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Request from '../../services/http';
import ApplicationItem from '../../components/ApplicationItem';

import './style.scss';

const Application = () => {
    const [applications, updateApplication] = useState([]);

    const getApplications = async () => {
        try {
            const { status, data } = await Request.get('/application/getApplications');

            if (status === 200) {
                updateApplication(data.results.rows);
            }
        } catch(e) {
            console.log(e)
        }
    }

    const handleDeleteApplication = async (id) => {
        console.log(`delete application id ${id}`)
    }

    useEffect(() => {
        getApplications();
    }, [])

    return <div className="application">
        <Container>
            <Row>
                {
                    applications.map((item, index) => <Col sm={6} md={4} lg={3} key={item.id}>
                            <ApplicationItem name={item.name} id={item.id} onDelete={handleDeleteApplication} />
                        </Col>)
                }
            </Row>
        </Container>
    </div>
}

export default Application;
