import React from "react";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./src/images/pic3.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Sketching Our Story: A Canvas of Passion and Creativity
                        </h2>
                        <p className="mt-6 text-gray-600 text-justify">
                        Welcome to our sketching haven, where creativity knows no bounds!
                         Our platform is dedicated to inspiring artists of all levels,
                          providing a space to showcase their unique sketches and connect
                           with fellow creatives. Join us on this artistic journey
                         as we celebrate the beauty of hand-drawn art and encourage
                          everyone to express their imagination!
                        </p>
                        <p className="mt-4 text-gray-600">
                        At our sketching website, we believe that every stroke 
                        tells a story, and every artist has a unique voice waiting
                         to be heard. Join us as we cultivate a vibrant community
                          where creativity flourishes 
                       
                       
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}