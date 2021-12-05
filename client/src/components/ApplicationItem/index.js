import React from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonLink from '../ButtonLink';
import ApplicationIcon from '../../assets/images/application-icon.png';
import ApplicationChart from '../../assets/images/application-chart.png';
import './style.scss';

const ApplicationItem = (props) => {
    const {
        id,
        name,
        onDelete,
    } = props;
    
    const handleDelete = () => {
        onDelete(id);
    }

    return <div className="application-item">
        <Card>
            <Card.Title>
                {name}
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Title>

            <Card.Body>
                <Card.Img variant="top" src={ApplicationIcon} />
                <div className="application-chart">
                    <Card.Text>
                        Utilzation
                    </Card.Text>
                    <Card.Img src={ApplicationChart} />
                </div>
                <div className="view-application">
                    <span className="shadow"></span>
                    <ButtonLink to={`/application/${id}`}>View Application</ButtonLink>
                </div>
            </Card.Body>
        </Card>
    </div>
};

export default ApplicationItem;
