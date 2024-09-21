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

import img12 from './images/R12.jpg';
import img13 from './images/R13.jpg';
import img14 from './images/R14.jpg';
import img15 from './images/R15.jpg';
import img16 from './images/R16.jpg';
import img17 from './images/R17.jpg';
import img18 from './images/R18.jpg';

import img19 from './images/R19.jpg';
import img20 from './images/R20.jpg';
import img21 from './images/R21.jpg';
import img22 from './images/R22.jpg';
import img23 from './images/R23.jpg';
import { CardText } from 'react-bootstrap';



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
<br />
<br />
<br />
<br />
<br />
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



<div className='data1' style={{backgroundColor:"yellowgreen"}}>

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
<br />
<br />
<br />
<br />

<div style={{backgroundColor:"greenyellow"}} >

<div className='data10' style={{backgroundColor:"grey", borderRadius:"30%", width:"1800px"}}  >


<Card style={{ width: '18rem' }}>
      <img src={img5} style={{borderRadius:"400px",width:"180px",height:"130px"}} />
      <Card.Body>
        <Card.Title>Higher Profits</Card.Title>
        <Card.Text>
        We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
        </Card.Text>
    </Card.Body>
</Card>



<Card style={{ width: '18rem' }}>
      <img src={img6} style={{borderRadius:"400px",width:"180px",height:"150px"}} />
      <Card.Body>
        <Card.Title>Robust Scaling</Card.Title>
        <Card.Text>
        Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
        </Card.Text>
    </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
      <img src={img7} style={{borderRadius:"320px",width:"160px"}} />
      <Card.Body>
        <Card.Title>Best Selection</Card.Title>
        <Card.Text>
        With 900+ products and top quality brands, you can choose the best products for your business.
        </Card.Text>
    </Card.Body>
</Card>

<br />
<br />
</div>

</div>

<br />
<br />
<br />
<br />


<div style={{backgroundColor:"greenyellow"}} >
<div className='data3' >
    <img src={img8} style={{width:"600px", height:"800px" }}/>

    <div className='data2' style={{color:"green",fontFamily:"cursive",fontSize:"40px"}} >
        Easily add your image to a <br /> wide range of products <br /><br />
      <div style={{color:"grey", fontFamily:"cursive",fontSize:"20px"}} > With our free design tools, you can easily add your <br /> custom designs to t-shirts, mugs, <br /> phone cases, and hundreds of other products.
</div> 

<div style={{fontSize:"20px"}}>All Products <Button variant='success'>-></Button> </div>

    </div>

</div>
</div>

<br />
<br />
<br />
<br />
<br />

<div style={{backgroundColor:"greenyellow" , width:"1800px"}}>
<div className='data10' style={{backgroundColor:"grey", borderRadius:"30%"}} >

    <Card style={{ width: '18rem' }}>
      <img src={img9} style={{borderRadius:"140px", width:"190px",height:"190px" }} />
      <Card.Body>
        <Card.Title><div style={{color:"green"}}>Create </div> <br/> Custom Products</Card.Title>
        <Card.Text>
          Easily add your design to a wide range of products using our free tools
        </Card.Text>
       
      </Card.Body>
    </Card>
  
<Card style={{ width: '18rem' }}>
      <img src={img10} style={{borderRadius:"150px", width:"190px", height:"190px"}} />
      <Card.Body>
        <Card.Title><div style={{color:"green"}}>SELL</div> <br/> On your terms</Card.Title>
        <Card.Text>
         You choose the products, sale price , and where to sell
        </Card.Text>
        
      </Card.Body>
    </Card>

<Card style={{ width: '18rem' }}>
     <img src={img11} style={{borderRadius:"150px", width:"190px", height:"190px"}} />
      <Card.Body>
        <Card.Title><div style={{color:"green"}}>WE HANDLE</div> <br/>fullfillment</Card.Title>
        <Card.Text>
         Once an order is placed, we automatically handle all printing and delivery logistics
        </Card.Text>
        
      </Card.Body>
    </Card>

</div>
</div>

<br />
<br />
<br />

<div>
    <h1 align="center">Connect your store</h1>
    <h6 align="center">Printify easily integrates with major e-commerce platforms and marketplaces</h6>
</div>
<div align = "center">
    <img src={img1} />
</div>

<div className='data4' style={{backgroundColor:"greenyellow", width:"1200px",height:"150px", margin:"auto",borderRadius:"80px"}}>
    <h1 style={{color:"green",padding:"30px"}}>Are you a large business looking <br /> for custom solutions?</h1>
    <Button variant='outline-success' className='data2'>Talk To Sales</Button>
</div>
<br />
<br />
<div className='data4' style={{padding:"50px"}}>
    <h1>Trusted by Over 8M <br /> sellers around <br /> the world</h1>
    <div className='data2'>Whether you are just getting started or run an enterprise-level e-commerce business, <br /> we do everything we can to ensure <br /> a positive merchant experience.</div>
</div>

<br />
<br />
<br />

<div className='data5' >
       
<Card style={{ }}> 
    <Card.Body style={{display:"flex", justifyContent:"left"}} > 
      <Card.Img variant="top" src={img12} style={{width:"100px",height:"100px", borderRadius:"60%" }} />

      <Card.Title>Robert A. Voultarie</Card.Title>
        <Card.Text>
        ⭐⭐⭐⭐⭐<br />
        <br />
         <Button variant='outline-success' >Store Link</Button>
        <br />
        <br />
        Printfy has incredible service for us musician kept large amount of inventory now we can create designs priviously too expensive to print without having to 1,000 shirts in our jam space. Thanks Printify!
      
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    
    
    <Card style={{ }}> 
    <Card.Body style={{display:"flex", justifyContent:"left"}} > 
      <Card.Img variant="top" src={img13} style={{width:"100px",height:"100px", borderRadius:"60%" }} />

      <Card.Title>Jhon Wick</Card.Title>
        <Card.Text>
        ⭐⭐⭐⭐⭐<br />
        <br />
         <Button variant='outline-success' >Store Link</Button>
        <br />
        <br />
       
        Printfy has incredible service for us musician kept large amount of inventory now we can create designs priviously too expensive to print without having to 1,000 shirts in our jam space. Thanks Printify!
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ }}> 
    <Card.Body style={{display:"flex", justifyContent:"left"}} > 
      <Card.Img variant="top" src={img14} style={{width:"100px",height:"100px", borderRadius:"60%" }} />

      <Card.Title>Quinten Barney</Card.Title>
        <Card.Text>
            <br />
        ⭐⭐⭐⭐⭐<br />
        <br />
         <Button variant='outline-success' >Store Link</Button>
        <br />
        <br />
       
        Printfy has incredible service for us musician kept large amount of inventory now we can create designs priviously too expensive to print without having to 1,000 shirts in our jam space. Thanks Printify!
        </Card.Text>
        
      </Card.Body>
    </Card>  
</div>

<br />
<br />

<div className='data5' >

<Card style={{ }}> 
    <Card.Body style={{display:"flex", justifyContent:"left"}} > 
      <Card.Img variant="top" src={img15} style={{width:"100px",height:"100px", borderRadius:"60%" }} />

      <Card.Title>Nikki Bella</Card.Title>
        <Card.Text>
            <br />
        ⭐⭐⭐⭐⭐<br />
        <br />
         <Button variant='outline-success' >Store Link</Button>
        <br />
        <br />
       
        Printfy has incredible service for us musician kept large amount of inventory now we can create designs priviously too expensive to print without having to 1,000 shirts in our jam space. Thanks Printify!
        </Card.Text>
        
      </Card.Body>
    </Card>  

    <Card style={{ }}> 
    <Card.Body style={{display:"flex", justifyContent:"left"}} > 
      <Card.Img variant="top" src={img16} style={{width:"100px",height:"100px", borderRadius:"60%" }} />

      <Card.Title>Spencer Kyle</Card.Title>
        <Card.Text>
            <br />
        ⭐⭐⭐⭐⭐<br />
        <br />
         <Button variant='outline-success' >Store Link</Button>
        <br />
        <br />
       
        Printfy has incredible service for us musician kept large amount of inventory now we can create designs priviously too expensive to print without having to 1,000 shirts in our jam space. Thanks Printify!
        </Card.Text>
        
      </Card.Body>
    </Card>  

    <Card style={{ }}> 
    <Card.Body style={{display:"flex", justifyContent:"left"}} > 
      <Card.Img variant="top" src={img17} style={{width:"100px",height:"100px", borderRadius:"60%" }} />

      <Card.Title>Beret Clown</Card.Title>
        <Card.Text>
            <br />
        ⭐⭐⭐⭐⭐<br />
        <br />
         <Button variant='outline-success' >Store Link</Button>
        <br />
        <br />
       
        Printfy has incredible service for us musician kept large amount of inventory now we can create designs priviously too expensive to print without having to 1,000 shirts in our jam space. Thanks Printify!
        </Card.Text>
        
      </Card.Body>
    </Card>  
</div>

<br />
<br />

<div className='data6'>

    <div className='data7' style={{backgroundColor:"grey",width:"800px", height:"600px", padding:"40px" }}>
<div style={{color:"floralwhite"}}>
       <h1>Make Money Risk Free</h1>
       You pay for fulfillment only when you make a sale
<br />
<br />
<br />
<br />


       <div style={{backgroundColor:"darkgrey",width:"250px",height:"200px"}}>
        You sell a T-Shirt  --------> 30$
        <br />
        <br />
        You pay For its Production -->  12$
        _____________________________________
        Your Profit  ------------->    18$
       </div>
       <br />
       <br />

       <Button variant='success'>Start Selling</Button>
       <br />
       <br />
       100% Free to use · 900+ Products · Largest print <br /> network
</div>
<img src={img18} style={{width:"300px",height:"600px"}} />
    </div>
</div>
<br />
<br />
<br />
<br />

<div className='data8' style={{backgroundColor:"greenyellow",}}>
    <div>Printify</div>
<div className='data9'>
<img src={img19} style={{width:"40px"}}/>
<img src={img21} style={{width:"40px"}}/>
<img src={img22} style={{width:"40px"}}/>
<img src={img23} style={{width:"40px"}}/>
<img src={img20} style={{width:"40px"}}/>
</div>

</div>

<div>
    <Row>
<Col md={3} >
        <Card >
      <Card.Body>Integration</Card.Body>
      <Button variant='outline-success'><CardText> Shopify </CardText></Button>
      <Button variant='outline-success'><CardText> Etsy </CardText></Button><br />
      <Button variant='outline-success'><CardText> E-bay </CardText></Button><br />
      <Button variant='outline-success'><CardText> Amazon </CardText></Button><br />
      <Button variant='outline-success'><CardText> TikTok </CardText></Button><br />
      <Button variant='outline-success'><CardText> Presta shop </CardText></Button><br />
      <Button variant='outline-success'><CardText> Big Commerce </CardText></Button><br />
      <Button variant='outline-success'><CardText> Wix </CardText></Button><br />
      <Button variant='outline-success'><CardText> WooCommerce </CardText></Button><br />
    </Card>
</Col>


<Col md={3} >
<Card >
   
      <Card.Body>Discover</Card.Body>  
      <Button variant='outline-success'><CardText> Blog </CardText></Button><br />
      <Button variant='outline-success'><CardText> Guides </CardText></Button><br />
      <Button variant='outline-success'><CardText> Products </CardText></Button><br />
      <Button variant='outline-success'><CardText> Esty print-on-demand </CardText></Button><br />
      <Button variant='outline-success'><CardText> WooCommerce print-on-demand </CardText></Button><br />
      <Button variant='outline-success'><CardText> Shopify print-on-demand </CardText></Button><br />
      <Button variant='outline-success'><CardText> Make Your Own Shirt   </CardText></Button><br />
      <Button variant='outline-success'><CardText> Blog </CardText></Button><br />
      <Button variant='outline-success'><CardText> Brands </CardText></Button><br />
      <Button variant='outline-success'><CardText> Pricing </CardText></Button>
     
    </Card> 
    
</Col>

<Col md={3} > 
<Card>
      <Card.Body>Start Selling</Card.Body>
      <Button variant='outline-success'><CardText> Custom T-shirts </CardText></Button><br />
      <Button variant='outline-success'><CardText> Custom Hoodies </CardText></Button><br />
      <Button variant='outline-success'><CardText> Custom Mugs</CardText></Button><br />
      <Button variant='outline-success'><CardText> Custom Socks </CardText></Button><br />
      <Button variant='outline-success'><CardText> Custom Backpacks </CardText></Button><br />
      <Button variant='outline-success'><CardText> Custom Branding </CardText></Button><br />
      <Button variant='outline-success'><CardText> Sell on Etsy </CardText></Button>
      <Button variant='outline-success'><CardText> Sell on Social Media </CardText></Button><br />
      <Button variant='outline-success'><CardText> Free T-shirt Designs </CardText></Button><br />
      <Button variant='outline-success'><CardText> Custom Products </CardText></Button><br />
      <Button variant='outline-success'><CardText> Custom All-Over-Print Hoodies</CardText></Button><br />
      <Button variant='outline-success'><CardText> Start a Clothing Line </CardText></Button><br />
      <Button variant='outline-success'><CardText> Start POD Business </CardText></Button><br />
      <Button variant='outline-success'><CardText> Bulk Orders </CardText></Button><br />
      <Button variant='outline-success'><CardText> Transfering To Printify </CardText></Button><br />
    </Card>
</Col>
       

    <Col md={3}>
<Card>
      <Card.Body>Printify </Card.Body>
      <Button variant='outline-success'><CardText> Print on Demand </CardText></Button><br />
      <Button variant='outline-success'><CardText> Print Providers </CardText></Button><br />
      <Button variant='outline-success'><CardText>  Experts Program </CardText></Button><br />
      <Button variant='outline-success'><CardText> Printify Express Delivery </CardText></Button><br />
      <Button variant='outline-success'><CardText> Become a Partner </CardText></Button><br />
      <Button variant='outline-success'><CardText> About </CardText></Button><br />
      <Button variant='outline-success'><CardText> Printify Quality Promise </CardText></Button><br />
 <Button variant='outline-success'><CardText> Jobs </CardText></Button><br />
  <Button variant='outline-success'><CardText> Webinars </CardText></Button><br />
 <Button variant='outline-success'><CardText> Printing Profits Podcast </CardText></Button><br />
<Button variant='outline-success'><CardText> Contact Us  </CardText></Button><br />
<Button variant='outline-success'><CardText> Affiliate  </CardText></Button><br />
 <Button variant='outline-success'><CardText> Contact Sales </CardText></Button><br />
  <Button variant='outline-success'><CardText> POD Glossary </CardText></Button><br />
<Button variant='outline-success'><CardText> Network Fulfillment Status  </CardText></Button><br />
 <Button variant='outline-success'><CardText> Merchant Protection </CardText></Button><br />
<Button variant='outline-success'><CardText> Security  </CardText></Button><br />
 <Button variant='outline-success'><CardText> Sitemap </CardText></Button><br />
    </Card>
</Col>
</Row>
</div>
<br />
<br />

<div className='data10'>
    <div>Intellectual Property Policy</div>
<div>Terms of Service</div>
<div>Privacy Policy </div>
  <div>Security</div>
</div>
<br />

<div className='data10' >© 2024 Printify, Inc. All rights reserved.</div>

</>
);
}
export default Home;