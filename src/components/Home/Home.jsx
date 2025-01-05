// import React from "react";
// import { Link } from "react-router-dom";
// export default function Home() {
//     return (
//         <div className="mx-auto w-full max-w-7xl">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-4xl font-bold sm:text-5xl text-justify">
//                             Sketch
//                             <br/>
//                             <span className="hidden sm:block text-xl text-justify text-gray-800 font-mono">Sketch is a powerful vector
//                              graphics editor designed for macOS, primarily used for user interface and user experience design,
//                              enabling designers to create stunning mockups and prototypes with ease.</span>
//                         </h2>

                        
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
//                     <img className="w-96" src="./src/images/pic1.jpg" alt="image1" />
//                 </div>
//             </aside>

//             <div className="grid  place-items-center sm:mt-20">
//                 {/* <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" /> */}
//                 <img className="sm:w-96 w-48" src="./src/images/pic4.jpg" alt="image2" />
//             </div>

//             <h1 className="text-center  text-xl  py-10 font-mono">In the golden glow of dawn,
//              a lone rider sits majestically atop his steed, embodying the spirit of adventure.
//               With the wind tousling his hair and a determined gaze set on the horizon,
//              he whispers to the world, 'Every journey begins with a single step; let this be ours.</h1>
//         </div>
//     );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-gray-100">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 bg-white shadow-lg">
                <div className="relative z-10 max-w-screen-xl px-4 pb-10 pt-10 sm:py-16 mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold sm:text-5xl text-gray-800 leading-tight text-center">
                    Sketch Studio
                    </h2>
                    <span className="block text-xl text-gray-600 font-mono text-center mt-4 mb-8">
                        Sketch is a powerful vector graphics editor designed for macOS, primarily used for user interface and user experience design, enabling designers to create stunning mockups and prototypes with ease.
                    </span>
                </div>

                <div className="w-full h-full">
                    <img className="w-full h-auto object-cover" src="./src/images/pic1.jpg" alt="image1" />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-96 w-48 rounded-lg shadow-md" src="./src/images/pic4.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-xl py-10 font-mono text-gray-700 italic max-w-prose mx-auto">
                In the golden glow of dawn, a lone rider sits majestically atop his steed, embodying the spirit of adventure. With the wind tousling his hair and a determined gaze set on the horizon, he whispers to the world, 'Every journey begins with a single step; let this be ours.'
            </h1>
        </div>
    );
}


