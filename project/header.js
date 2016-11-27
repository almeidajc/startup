import React from 'react';
import {Link} from 'react-router';
import {Image, Navbar, Nav, NavItem, MenuItem, Col, Row, Tab, TabContainer, NavDropdown} from 'react-bootstrap';

import articleStore from './articleStore';
import SearchConfig from './SearchConfig';
import ApiConfig from './ApiConfig';
// import ArticlesList from 'ArticlesList';
// import Favourites from './favourites';
import Rout from './routes';

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  // <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
  //    <Row>
  //      <Col sm={12}>
  //        <Nav bsStyle="tabs">
  //          <Link to="/home"><NavItem>Home</NavItem></Link>
  //          <NavDropdown title="Notices" id="nav-dropdown-within-tab">
  //            <Link to="/SearchConfig"><MenuItem>Search Notices</MenuItem></Link>
  //            <MenuItem divider />
  //            <Link to="/ApiConfig/0"><MenuItem>Last Notices</MenuItem></Link>
  //          </NavDropdown>
  //          <Link to="/favourites"><NavItem>Show Favourites</NavItem></Link>
  //        </Nav>
  //      </Col>
  //    </Row>
  //  </Tab.Container>


  // const menu = (
  //   <Navbar inverse collapseOnSelect>
  //     <Navbar.Header>
  //       <Navbar.Brand>
  //         <a href="#">React-Bootstrap</a>
  //       </Navbar.Brand>
  //       <Navbar.Toggle />
  //     </Navbar.Header>
  //     <Navbar.Collapse>
  //       <Nav>
  //         <NavItem>Home</NavItem>
  //         <NavItem>Link</NavItem>
  //         <NavDropdown eventKey={3} title="Notices" id="basic-nav-dropdown">
  //           <MenuItem eventKey={3.1}>Search Notices</MenuItem>
  //           <MenuItem divider />
  //           <MenuItem eventKey={3.2}>Last Notices</MenuItem>
  //         </NavDropdown>
  //         <NavItem>Show Favourites</NavItem>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // );


  // <Tab.Container id="tabs-with-dropdown">
  // <Row>
  //   <Col sm={12}>
  //     <Nav bsStyle="tabs">
  //       <Link to="/home"><NavItem>Home</NavItem></Link>
  //       <NavDropdown title="Notices" id="nav-dropdown-within-tab">
  //         <Link to="/SearchConfig"><MenuItem>Search Notices</MenuItem></Link>
  //         <MenuItem divider />
  //         <Link to="/ApiConfig/0"><MenuItem>Last Notices</MenuItem></Link>
  //       </NavDropdown>
  //       <Link to="/favourites"><NavItem>Show Favourites</NavItem></Link>
  //     </Nav>
  //   </Col>
  // </Row>
  // </Tab.Container>

/*
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to="/home"><label>Home</label></Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav pullRight>
    <Nav>
      <NavDropdown title="Notices" id="basic-nav-dropdown">
        <Link to="SearchConfig">Search Notices</Link>
        <MenuItem divider />
        <Link to="/ApiConfig/0"><MenuItem>Last Notices</MenuItem></Link>
      </NavDropdown>
      <Link to="/favourites"><NavItem>Show Favourites</NavItem></Link>
    </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
*/

  render () {
    return (
      <div>
        <div>
          <Link to="/"> Home</Link>
          <Link to="SearchConfig">Search Notices</Link>
          <Link to="ApiConfig/0">Show Notices</Link>
        </div>

        {this.props.children}
      </div>
    );
  }

};


export default Header;
