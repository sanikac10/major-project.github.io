import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const Universities = () => {
            return (
                <div style={{marginLeft: '60px'}}>
                <body>

                <h1>These are the Universities from which most of the trending projects are.</h1>
                <br></br>
                <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 12 }).map((_, idx) => (
                    
                        <Col>  
                        <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            component="img"
                            alt="University of Mumbai"
                            height="140"
                            image="/src/images.js/one.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Vidyalankar Institute of Technology
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            There are 100 trending projects from this college in this week in various technologies.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View College</Button>
                            <Button size="small">Save</Button>
                        </CardActions>
                        </Card>
                    </Col>
                  ))}
                </Row>  
                <br></br>
                </body>
                </div>
  );



}