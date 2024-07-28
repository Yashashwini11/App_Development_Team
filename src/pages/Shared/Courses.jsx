// // import React from 'react';
// // import '../../assets/css/Cards.css';
// // import img2 from '../../assets/Images/react.png'
// // import img1 from '../../assets/Images/data.png'
// // import img3 from '../../assets/Images/jsframeworks.png'
// // import img4 from '../../assets/Images/gatsby.png'
// // import img5 from '../../assets/Images/mobile.png'
// // import img6 from '../../assets/Images/htmlim.png'
// // import img7 from '../../assets/Images/usability.png'
// // import img8 from '../../assets/Images/flutter.png'
// // import img9 from '../../assets/Images/interface.png'
// // import {Link} from 'react-router-dom'
// // import {Typography} from '@mui/material';
// // const Courses = () => {
// //   return (
// //     <div>
// //         {/* <h1 className='text-black dark:text-white'>Courses</h1> */}
// //         <Typography variant="h4" gutterBottom align="center" style={{marginBottom:'30px'}} className='text-black dark:text-white'>Courses</Typography>
// // <div className='card-wrap dark:text-black'>
// //   <div class='card'>
// //     <div class='set-image'>
// //       <img src={img9} alt="no image"/>
// //       </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div className='set-text mt-3 justify-evenly items-center'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'>sedrftyguhjikjfdf</div>
// //     <div class='set-text'>sqdwdfghjyk</div>
// //     <div class='set-text'>wefrgthy</div>
// //     <div class='set-text'>wefrgthy</div>
// //     <div class='set-text'>qwefrgthy</div> */}
// //     <div class='ribbon-wrapper-1'>
// //       <div class='ribbon-1'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //       <img src={img2} alt="no image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text' className='mt-3 justify-center align-items'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'>szdrftyguhi</div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-2'>
// //       <div class='ribbon-2'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //     <img src={img1}  alt="no image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text' className='mt-3 justify-center align-items'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-3'>
// //       <div class='ribbon-3'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img3}  alt="No image" />
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-4'>
// //       <div class='ribbon-4'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img4} alt="No image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>
// //     HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.
// //     </div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-5'>
// //       <div class='ribbon-5'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img5} alt="No image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-6'>
// //       <div class='ribbon-6'>Ribbon</div>
// //     </div>
// //         <div>
// //         <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg text-black mt-5 border-none dark:bg-teal-800 dark:text-white'>
// //                 Enroll
// //                 </button>
// //         </div>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img6} alt="No image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-7'>
// //       <div class='ribbon-7'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img7} alt="no image" />
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //       It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.</div>
// //     {/* <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div> */}
// //     <div class='ribbon-wrapper-8'>
// //       <div class='ribbon-8'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// //   <div class='card'>
// //     <div class='set-image'>
// //         <img src={img8} alt="no image"/>
// //     </div>
// //     {/* <div class='set-headline'></div> */}
// //     <div class='set-text'>
// //         HTML, or HyperText Markup Language, is the standard language used to create and design web pages. 
// //        It structures content on the web by using various tags and elements to describe headings, paragraphs, links,
// //        images, and more. HTML forms the backbone of web content and is essential for web development.
// //     </div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='set-text'></div>
// //     <div class='ribbon-wrapper-9'>
// //       <div class='ribbon-9'>Ribbon</div>
// //     </div>
// //     <Link to="/courses">
// //     <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg  mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
// //               Enroll
// //     </button>
// //     </Link>
// //   </div>
// // </div>
// //     </div>
// //   )
// // }

// // export default Courses;



// import React from 'react';
// import '../../assets/css/Cards.css';
// import img2 from '../../assets/Images/react.png'
// import img1 from '../../assets/Images/data.png'
// import img3 from '../../assets/Images/jsframeworks.png'
// import img4 from '../../assets/Images/gatsby.png'
// import img5 from '../../assets/Images/mobile.png'
// import img6 from '../../assets/Images/htmlim.png'
// import img7 from '../../assets/Images/usability.png'
// import img8 from '../../assets/Images/flutter.png'
// import img9 from '../../assets/Images/interface.png'
// import { Link } from 'react-router-dom'
// import { Typography } from '@mui/material';

// const Courses = () => {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '30px' }} className='text-black dark:text-white'>
//         Courses
//       </Typography>
//       <div className='card-wrap dark:text-black'>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img9} alt="No image" />
//           </div>
//           <div className='set-text mt-3 justify-evenly items-center'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-1'>
//             <div className='ribbon-1'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img2} alt="No image" />
//           </div>
//           <div className='set-text mt-3 justify-center align-items'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-2'>
//             <div className='ribbon-2'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img1} alt="No image" />
//           </div>
//           <div className='set-text mt-3 justify-center align-items'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-3'>
//             <div className='ribbon-3'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img3} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-4'>
//             <div className='ribbon-4'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img4} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-5'>
//             <div className='ribbon-5'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img5} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-6'>
//             <div className='ribbon-6'>Ribbon</div>
//           </div>
//           <div>
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg text-black mt-5 border-none dark:bg-teal-800 dark:text-white'>
//               Enroll
//             </button>
//           </div>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img6} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-7'>
//             <div className='ribbon-7'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img7} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-8'>
//             <div className='ribbon-8'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//         <div className='card'>
//           <div className='set-image'>
//             <img src={img8} alt="No image" />
//           </div>
//           <div className='set-text'>
//             HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
//           </div>
//           <div className='ribbon-wrapper-9'>
//             <div className='ribbon-9'>Ribbon</div>
//           </div>
//           <Link to="/courses">
//             <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
//               Enroll
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;


import React from 'react';
import '../../assets/css/Cards.css';
import img2 from '../../assets/Images/react.png';
import img1 from '../../assets/Images/data.png';
import img3 from '../../assets/Images/jsframeworks.png';
import img4 from '../../assets/Images/gatsby.png';
import img5 from '../../assets/Images/mobile.png';
import img6 from '../../assets/Images/htmlim.png';
import img7 from '../../assets/Images/usability.png';
import img8 from '../../assets/Images/flutter.png';
import img9 from '../../assets/Images/interface.png';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Courses = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '30px' }} className='text-black dark:text-white'>
        Courses
      </Typography>
      <div className='card-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ml-11'>
        <div className='card'>
          <div className='set-image'>
            <img src={img9} alt="No image" />
          </div>
          <div className='set-text mt-3'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-1'>
            <div className='ribbon-1'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Enroll
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img2} alt="No image" />
          </div>
          <div className='set-text mt-3'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-2'>
            <div className='ribbon-2'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Enroll
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img1} alt="No image" />
          </div>
          <div className='set-text mt-3'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-3'>
            <div className='ribbon-3'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Enroll
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img3} alt="No image" />
          </div>
          <div className='set-text'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-4'>
            <div className='ribbon-4'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Enroll
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img4} alt="No image" />
          </div>
          <div className='set-text'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-5'>
            <div className='ribbon-5'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Enroll
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img5} alt="No image" />
          </div>
          <div className='set-text'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-6'>
            <div className='ribbon-6'>Ribbon</div>
          </div>
          <div>
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg text-black mt-5 border-none dark:bg-teal-800 dark:text-white'>
              Enroll
            </button>
          </div>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img6} alt="No image" />
          </div>
          <div className='set-text'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-7'>
            <div className='ribbon-7'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Enroll
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img7} alt="No image" />
          </div>
          <div className='set-text'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-8'>
            <div className='ribbon-8'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Enroll
            </button>
          </Link>
        </div>
        <div className='card'>
          <div className='set-image'>
            <img src={img8} alt="No image" />
          </div>
          <div className='set-text'>
            HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It structures content on the web by using various tags and elements to describe headings, paragraphs, links, images, and more. HTML forms the backbone of web content and is essential for web development.
          </div>
          <div className='ribbon-wrapper-9'>
            <div className='ribbon-9'>Ribbon</div>
          </div>
          <Link to="/courses">
            <button type="submit" className='bg-blue-300 h-[5vh] w-[7vw] border-r-2 rounded-lg mt-5 border-none dark:bg-teal-800 dark:text-white text-black'>
              Enroll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
