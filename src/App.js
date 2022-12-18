
import './App.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import { About } from './components/About';
import { Universities } from './components/Universities';
import { Technologies } from './components/Technologies';
import { Home } from './components/home';
import { Icon } from '@mui/material';
import { Domain } from './components/domain';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">WeDirect</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Universities">Universities</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Domain">Domain</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Technologies">
                Technology
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About Us</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> 
            <Button variant="info">Search</Button> &nbsp;
            <Button variant="outline-warning">Login/SignUp</Button>{' '}

            <Icon></Icon>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>





    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/Universities" element={<Universities/>}/>
      <Route path="/Technologies" element={<Technologies/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Domain" element={<Domain/>}/> 
    </Routes>
  </div>


    <footer >
    <MDBFooter style={{ backgroundColor: '#0a4275' }} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className=''>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold text-white'>
                <MDBIcon icon="gem" className="me-3" />
                WeDirect
              </h6>
              <p className='text-white'>
                WeDirect is a web directory for projects made by students across different universities in India.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold text-white'>Social Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  LinkedIn
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  facebook
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  twitter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  instagram
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold text-white'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Technologies
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold text-white'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="text-white" />
                Vidyalankar Marg, Wadala.
              </p>
              <p>
                <MDBIcon icon="envelope" className="text-white" />
                wedirect@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="text-white" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="text-white" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-white p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} align-items-center>
        © 2022 Copyright:
        <a className='text-center text-white p-3' href=''>
          wedirect.com
        </a>
      </div>
    </MDBFooter>
    </footer>

    </BrowserRouter>
  );
}

export default App;
