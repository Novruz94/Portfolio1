import React from 'react'
import bootstrap from 'bootstrap';
// import {Link} from 'react-router-dom';
import BannerImage from '../images/banner.jpg';
import BannerImage1 from '../images/1beef.jpg';
import BannerImage2 from '../images/2blackbean.jpg';
import BannerImage3 from '../images/3chicken.jpg';
import BannerImage4 from '../images/5veggie.jpg';
import BannerImage5 from '../images/6cheese.jpg';


// function Home() {
//   return (
//     <div>

// <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
//         <div className='headerContainer'>
//            <h1>Burger 33</h1>
//            <p>Delicious Hamburgers <br/> with 33 Spicy Mixed</p>
//            <Link to="/menu"><button>Order Now</button></Link>
//         </div>
// </div>

// <div className='home' style={{backgroundImage:`url(${BannerImage1})`}}>
//         <div className='headerContainer'>
//            <h1>Burger 33</h1>
//            <p>Delicious Hamburgers <br/> with 33 Spicy Mixed</p>
//            <Link to="/menu"><button>Order Now</button></Link>
//         </div>
// </div>

// <div className='home' style={{backgroundImage:`url(${BannerImage2})`}}>
//         <div className='headerContainer'>
//            <h1>Burger 33</h1>
//            <p>Delicious Hamburgers <br/> with 33 Spicy Mixed</p>
//            <Link to="/menu"><button>Order Now</button></Link>
//         </div>
// </div>

// <div className='home' style={{backgroundImage:`url(${BannerImage3})`}}>
//         <div className='headerContainer'>
//            <h1>Burger 33</h1>
//            <p>Delicious Hamburgers <br/> with 33 Spicy Mixed</p>
//            <Link to="/menu"><button>Order Now</button></Link>
//         </div>
// </div>

// <div className='home' style={{backgroundImage:`url(${BannerImage4})`}}>
//         <div className='headerContainer'>
//            <h1>Burger 33</h1>
//            <p>Delicious Hamburgers <br/> with 33 Spicy Mixed</p>
//            <Link to="/menu"><button>Order Now</button></Link>
//         </div>
// </div>

// <div className='home' style={{backgroundImage:`url(${BannerImage5})`}}>
//         <div className='headerContainer'>
//            <h1>Burger 33</h1>
//            <p>Delicious Hamburgers <br/> with 33 Spicy Mixed</p>
//            <Link to="/menu"><button>Order Now</button></Link>
//         </div>
// </div>

// </div>
//   )
// }

// export default Home





// function Home() {
//   return (
//     <div>
      
//       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//          <div className="carousel-inner">
//            <div className="carousel-item active">
//             <img src={BannerImage} className="d-block w-100" alt="..."/>
//            </div>
//            <div className="carousel-item">
//             <img src={BannerImage1} className="d-block w-100" alt="..."/>
//            </div>
//            <div className="carousel-item">
//             <img src={BannerImage2} className="d-block w-100" alt="..."/>
//            </div>
//            <div className="carousel-item">
//             <img src={BannerImage3} className="d-block w-100" alt="..."/>
//            </div>
//            <div className="carousel-item">
//             <img src={BannerImage4} className="d-block w-100" alt="..."/>
//            </div>
//            <div className="carousel-item">
//             <img src={BannerImage5} className="d-block w-100" alt="..."/>
//            </div>
//          </div>
//        </div>



//     </div>
//   )
// }

// export default Home





function Home() {
  return (
    <div>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={BannerImage} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BannerImage1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BannerImage2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BannerImage3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BannerImage4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BannerImage5} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      
    </div>
  )
}

export default Home







