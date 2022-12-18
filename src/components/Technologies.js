import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export const Technologies = () => {
            return (
                <div style={{marginLeft: '30px'}}>
                <h1>These are the most trending technologies of this week</h1>
                <br></br>
                <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 16 }).map((_, idx) => (
                    
                        <Col>  
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Machine Learning"
                            height="140"
                            image="/public/one.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Face Detection System
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            This project is #x in last 5 days and based on core concepts of Machine learning and Artificial Intelligence.
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
                <br></br> 
                </div>
  );



}