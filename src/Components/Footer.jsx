// export const Footer = () => {
//     return (
//       <div style={{ width: '100%',height:'500px', overflow :'hidden' }} className="footer-container bg-dark mt-5">
//         <div className="lower">
//           <h1 style={{ color: 'white' }} className="text-center">our branches..</h1>
//           <div style={{ paddingLeft: '50px',paddingRight:'50px' }} className="row d-flex justify-content-around align-items-center">
//             <div  className="col-lg-3 ">
//               <h4 style={{ color: 'white' }}>Kolkata</h4>
//               <h4 style={{ color: 'white' }}>kerala</h4>
//               <h4 style={{ color: 'white' }}>Tamil Nadu</h4>
//               <h4 style={{ color: 'white' }}>Mumbai</h4>
//               <h4 style={{ color: 'white' }}>Angamaly</h4>
              
//             </div>
//             <div className="col-lg-3">
//               <h4 style={{ color: 'white' }}>Kolkata</h4>
//               <h4 style={{ color: 'white' }}>kerala</h4>
//               <h4 style={{ color: 'white' }}>Tamil Nadu</h4>
//               <h4 style={{ color: 'white' }}>Mumbai</h4>
//               <h4 style={{ color: 'white' }}>Angamaly</h4>
//             </div>
//             <div className="col-lg-3">
//               <h4 style={{ color: 'white' }}>Kolkata</h4>
//               <h4 style={{ color: 'white' }}>kerala</h4>
//               <h4 style={{ color: 'white' }}>Tamil Nadu</h4>
//               <h4 style={{ color: 'white' }}>Mumbai</h4>
//               <h4 style={{ color: 'white' }}>Angamaly</h4>
//             </div>
//             <div className="col-lg-3">
//               <h4 style={{ color: 'white' }}>Dubai</h4>
//               <h4 style={{ color: 'white' }}>kerala</h4>
//               <h4 style={{ color: 'white' }}>Tamil Nadu</h4>
//               <h4 style={{ color: 'white' }}>Mumbai</h4>
//               <h4 style={{ color: 'white' }}>Angamaly</h4>
//             </div>
//           </div>
         
//         </div>
//         <div className="text-center" style={{ color: 'white', marginBottom: '100rem' }}>
//           <p>Email: example@example.com</p>
//         </div>
       
//       </div>
//     )
//   }
  
//   export default Footer;

export const Footer = () => {
  return (
    <div className="footer-container bg-dark mt-5  py-5 px-4">
      <div className="lower">
        <h1 className="text-center text-white mb-4 fw-bold">Our Branches</h1>
        <div className="row justify-content-around align-items-center">
          <div className="col-lg-3">
            <h4 className="text-white">Kolkata</h4>
            <h4 className="text-white">Kerala</h4>
            <h4 className="text-white">Tamil Nadu</h4>
            <h4 className="text-white">Mumbai</h4>
            <h4 className="text-white">Angamaly</h4>
          </div>
          <div className="col-lg-3">
            <h4 className="text-white">Kolkata</h4>
            <h4 className="text-white">Kerala</h4>
            <h4 className="text-white">Tamil Nadu</h4>
            <h4 className="text-white">Mumbai</h4>
            <h4 className="text-white">Angamaly</h4>
          </div>
          <div className="col-lg-3">
            <h4 className="text-white">Kolkata</h4>
            <h4 className="text-white">Kerala</h4>
            <h4 className="text-white">Tamil Nadu</h4>
            <h4 className="text-white">Mumbai</h4>
            <h4 className="text-white">Angamaly</h4>
          </div>
          <div className="col-lg-3">
            <h4 className="text-white">Dubai</h4>
            <h4 className="text-white">Kerala</h4>
            <h4 className="text-white">Tamil Nadu</h4>
            <h4 className="text-white">Mumbai</h4>
            <h4 className="text-white">Angamaly</h4>
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-5">
         <h3>follow us</h3> 
        <p>Email: example@example.com</p>
        <i style={{color:"orangered",height:"40px"}} class="fa-brands fa-instagram m-2"></i>
        <i style={{color:"orangered",height:"40px"}} class="fa-brands fa-facebook m-2"></i>
        <i  style={{color:"orangered",height:"40px"}}class="fa-brands fa-youtube m-2"></i>
        <i style={{color:"orangered",height:"40px"}} class="fa-brands fa-twitter m-2"></i>
     
      </div>
    </div>
  );
};

export default Footer;

  