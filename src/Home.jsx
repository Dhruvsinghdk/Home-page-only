import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import img1 from './images/R1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import img2 from './images/R2.jpg';
import img3 from './images/R3.jpg';
import img4 from './images/R4.jpg';
import img5 from './images/R5.jpg';
import img6 from './images/R6.jpg';
import img7 from './images/R7.jpg';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img8 from './images/R8.jpg';
import img9 from './images/R9.jpg';
import img10 from './images/R10.jpg';
import img11 from './images/R11.jpg';




const Home = ()=>{
  return(
    <>
    <div style={{backgroundColor:"yellowgreen"}}>
<Nav fill variant="tabs" defaultActiveKey="/home">
<Nav.Item>
        <h3>Printify</h3>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/home">Catalog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"  >
            
        <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
       <div style={{color:"blue"}}>How it Works</div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">How Printify Works</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Print On Demand</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Printify Quality Promise</Dropdown.Item>
        <Dropdown.Item href="#/action-4">What On Sale?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-2">Pricing</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="disabled" >
          Blog
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-3">

        <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
       <div style={{color:"blue"}}>Services</div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Printify Studio</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Printify Express Delivery</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Transfer Products</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Order In Bulk</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Experts Program</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </Nav.Link>
      </Nav.Item>

    <Nav.Item>

        <Nav.Link eventKey="link-4">

        <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
       <div style={{color:"blue"}}>Use-Cases</div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mens For Fans</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Merch For eCommerce</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Merch For Enterprise</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Grow Your Store</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </Nav.Link>
    
    </Nav.Item>
    </Nav>
</div>

<Carousel>
      <Carousel.Item>
        <img src={img2} width="1800" height="200px" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} width="1800" height="200px"/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} width="1800"  height="200px" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



<div className='data1'>

<div >

<h1 style={{fontSize:"80px"}} >Create and sell<br/>
custom  products
</h1>

100% free to use<br/>
900+ High Quality Products<br/>
Largest Global Print Network
<br/>
<br/>
<br/>

<Button variant='success'>Start For Free</Button>  <Button variant="outline-secondary">  How Does It Works?</Button>{' '}
<br />
<br />
<div style={{color:"green"}}>
    Trusted By over 8M Sellers Around The World
</div>

</div>

<div className = "data2" >
    <img src={img1} style={{height:"400px", width:"500px"}}/>

</div>

</div>

<Row>
    <Col md={4}>
<Card style={{ width: '18rem' }}>
      <img src={img5} style={{borderRadius:"400px",width:"180px",height:"130px"}} />
      <Card.Body>
        <Card.Title>Higher Profits</Card.Title>
        <Card.Text>
        We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
        </Card.Text>
    </Card.Body>
</Card>
</Col>

<Col md={4}>
<Card style={{ width: '18rem' }}>
      <img src={img6} style={{borderRadius:"400px",width:"180px",height:"150px"}} />
      <Card.Body>
        <Card.Title>Robust Scaling</Card.Title>
        <Card.Text>
        Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
        </Card.Text>
    </Card.Body>
</Card>
</Col>

<Card style={{ width: '18rem' }}>
      <img src={img7} style={{borderRadius:"320px",width:"160px"}} />
      <Card.Body>
        <Card.Title>Best Selection</Card.Title>
        <Card.Text>
        With 900+ products and top quality brands, you can choose the best products for your business.
        </Card.Text>
    </Card.Body>
</Card>
</Row>
<br />
<br />

<div className='data3' >
    <img src={img8} style={{width:"600px", height:"800px" }}/>

    <div className='data2' style={{color:"green",fontFamily:"cursive",fontSize:"40px"}} >
        Easily add your image to a <br /> wide range of products <br /><br />
      <div style={{color:"grey", fontFamily:"cursive",fontSize:"20px"}} > With our free design tools, you can easily add your <br /> custom designs to t-shirts, mugs, <br /> phone cases, and hundreds of other products.
</div> 

<div style={{fontSize:"20px"}}>All Products <Button variant='success'>-></Button> </div>

    </div>

</div>


<Row>
    <Col>
    <Card style={{ width: '18rem' }}>
      <img src={img9} style={{borderRadius:"140px", width:"190px",height:"190px" }} />
      <Card.Body>
        <Card.Title><div style={{color:"green"}}>Create </div> <br/> Custom Products</Card.Title>
        <Card.Text>
          Easily add your design to a wide range of products using our free tools
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
<Col>
<Card style={{ width: '18rem' }}>
      <img src={img10} style={{borderRadius:"150px", width:"190px", height:"190px"}} />
      <Card.Body>
        <Card.Title><div style={{color:"green"}}>SELL</div> <br/> On your terms</Card.Title>
        <Card.Text>
         You choose the products, sale price , and where to sell
        </Card.Text>
        
      </Card.Body>
    </Card>
</Col>

<Col>
<Card style={{ width: '18rem' }}>
     <img src={img11} style={{borderRadius:"150px", width:"190px", height:"190px"}} />
      <Card.Body>
        <Card.Title><div style={{color:"green"}}>WE HANDLE</div> <br/>fullfillment</Card.Title>
        <Card.Text>
         Once an order is placed, we automatically handle all printing and delivery logistics
        </Card.Text>
        
      </Card.Body>
    </Card>
</Col>
</Row>

<div>
    <h1 align="center">Connect your store</h1>
    <h6 align="center">Printify easily integrates with major e-commerce platforms and marketplaces</h6>
</div>
<div align = "center">
    <img src={img1} />
    <br />
    <br />
    <br />
    <br />
    <img src={img2} />
</div>

</>
);
}
export default Home;