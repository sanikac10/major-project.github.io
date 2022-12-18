import React from 'react'
import { Container } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
import { Technologies } from './Technologies';
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    Link,
    BrowserRouter,
  } from "react-router-dom";

export const Domain = () => {
    return(
        <div>
            <Container>
                <h1>
                    Choose the domain you wish to research on!
                </h1>
            <br></br>
            <Button variant="outline-info" as={Link} to="/Technologies">Machine Learning</Button>  &nbsp;
            
            <Button variant="outline-info" as={Link} to="/Technologies">Deep Learning</Button>  &nbsp;

            <Button variant="outline-info" as={Link} to="/Technologies">Cloud Computing</Button>  &nbsp;

            <Button variant="outline-info" as={Link} to="/Technologies">Web Development</Button> &nbsp;

            <Button variant="outline-info" as={Link} to="/Technologies">App Development</Button> &nbsp;
            <br></br>

            </Container>
            <Routes>


      <Route path="/Technologies" element={<Technologies/>}/>


    </Routes>
        </div>
    )
}

