// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Video from '../src/assets/mcdovideo.mp4'
// import { useRef } from 'react'
// import { useEffect } from 'react'

// function App() {

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.preload = 'auto'; 
//     }
//   }, []); 
  
//   const [count, setCount] = useState(0)
//   const videoRef = useRef(null)
//   const videoElement = videoRef.current
//   let position = 0
//   const vitesse = 1200
//   videoRef.preload = 'true'


//   window.requestAnimationFrame(avanceVideo)
  
//   function avanceVideo() {
//     position = window.pageYOffset / vitesse
//     console.log('show position' + position);
//     if (videoRef.readyState >= 3) {
//       videoRef.currentTime = position;
//     } 
//     window.requestAnimationFrame(avanceVideo)
//   }
//   // function avanceVideo() {
//   //   const calculatedPosition = window.pageYOffset / vitesse;
//   //   console.log('show position' + calculatedPosition);
//   //   if (videoRef.readyState >= 3) {
//   //     videoRef.currentTime = position;
//   //   } 
//   //   window.requestAnimationFrame(avanceVideo)
//   // }

//   return (
//     <div>
//       <section className="conteneur">
//         <div id="boom" className="contenu">
//           <h1>Boom</h1>
//         </div>
//       </section>
//       <section className="conteneur">
//         <div id="feu" className="contenu">
//           <h1>Feu</h1>
//         </div>
//       </section>
//       <section className="conteneur">
//         <div id="fumee" className="contenu">
//           <h1>Fumee</h1>
//           {/* <video ref={videoRef} autoPlay loop muted className="videoapple">
//             <source src={Video} type="video/mp4" />
//           </video> */}
//         </div>
//       </section>
//       <section className="conteneur">
//         <div id="fin" className="contenu">
//           <h1>Fin</h1>
//         </div>
//       </section>
//       <section className="conteneur">
//         <div id="findeux" className="contenu">
//           <h1>Fin</h1>
//         </div>
//       </section>

//       <video ref={videoRef} className="videoapple">
//         <source src={Video} type="video/mp4" />
//       </video>
//     </div>
//   )
// }

// export default App


import { useState, useRef, useEffect } from 'react'
import './App.css'
import Video from './assets/mcdovideo.mp4'

function App() {
  const [count, setCount] = useState(0)
  const videoRef = useRef(null)
  let position = 0
  const vitesse = 1200

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = 'auto'
    }
  }, [])

  useEffect(() => {
    function avanceVideo() {
      position = window.pageYOffset / vitesse
      console.log('show position' + position)
      if (videoRef.current.readyState >= 3) {
        videoRef.current.currentTime = position
      }
      window.requestAnimationFrame(avanceVideo)
    }
    window.requestAnimationFrame(avanceVideo)
  }, [])

  return (
    <div>
      <section className="conteneur">
        <div id="boom" className="contenu">
          <h1>Boom</h1>
        </div>
      </section>
      <section className="conteneur">
        <div id="feu" className="contenu">
          <h1>Feu</h1>
        </div>
      </section>
      <section className="conteneur">
        <div id="fumee" className="contenu">
          <h1>Fumee</h1>
        </div>
      </section>
      <section className="conteneur">
        <div id="fin" className="contenu">
          <h1>Fin</h1>
        </div>
      </section>
      <section className="conteneur">
        <div id="finDeux" className="contenu">
          <h1>Fin</h1>
        </div>
      </section>

      <video ref={videoRef} className="videoapple">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  )
}

export default App