import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from './home.css';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import videoBg from '../images/video.mp4'


export const Home = () => {
    return (
        <div>
        <header/> 
        <body>
        <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1 className="h1">Exploring new project easy</h1>
            <h1 className="h1">like never before! </h1>
        </div>
        </div>
        <br></br>

        <Container className='.me-5'>
        <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 12 }).map((_, idx) => (
            
                <Col className={style.col}>  
                <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    alt="Domain Name"
                    height="140"
                    image="/src/images.js/one.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Project Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Short Brief paragraph about the project explaining its working or basic things.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">View Project</Button>
                    <Button size="small">Save</Button>
                </CardActions>

                </Card>
            </Col>
          ))}

        </Row>  

        </Container>

        <br></br>
        </body>
        <footer/>
        </div>
);



}
