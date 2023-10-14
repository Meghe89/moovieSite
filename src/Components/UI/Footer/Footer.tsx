import { useEffect, useState } from "react";

export default function Footer() {
    function currentYear() {
        const date = new Date();
        return date.getFullYear();
    }

    const [ now, setNow ] = useState<number>(0);

    useEffect(()=>{
        setNow(currentYear());
    }, [])

    return (
        
<footer className="text-center text-lg-start border-top"> 
  <section className="">
    <div className="container text-center text-md-start mt-5">      
      <div className="row mt-3">        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Megheflix
          </h6>
          <p>
            All moovies you want to watch, you can find here!
          </p>
        </div>        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">          
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Bologna, It</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> 051 2548564</p>
          <p><i className="fas fa-print me-3"></i> +39 347 3949394</p>
        </div>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top">
   
    <div className="me-5 d-none d-lg-block ">
      <span>Follow Us On:</span>
    </div>
    
    <div>
        <i className="fab fa-facebook-f mx-2"></i>
      
        <i className="fab fa-twitter mx-2"></i>
     
        <i className="fab fa-google mx-2"></i>
      
        <i className="fab fa-instagram mx-2"></i>
      
        <i className="fab fa-linkedin mx-2"></i>
      
        <i className="fab fa-github mx-2"></i>
     
    </div>
    
  </section>
        
      </div>
     
    </div>
  </section>
  
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © { now } Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  
</footer>

    );
}