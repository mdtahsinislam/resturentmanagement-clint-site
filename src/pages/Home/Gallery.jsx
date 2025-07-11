





import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";


import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: "https://i.ibb.co/B552vSfC/13.jpg" }, // 1st image - Example: Sunglasses on sand
        { src: "https://i.ibb.co/6J4ch5Dv/food1.jpg" }, // 2nd image
        { src: "https://i.ibb.co/JWJhxwzM/food3.jpg" }, // 3rd image
        { src: "https://i.ibb.co/sdP4hDr3/friday.jpg" }, // This URL was used for the banner, adding to gallery
        
        { src: "https://i.imghippo.com/files/qj8596GHw.jpg" },
        { src: "https://i.imghippo.com/files/az8456iAE.jpg" },
       {src:"https://i.imghippo.com/files/dfY1723sog.jpg"},
       {src:"https://i.imghippo.com/files/nZEH2550nQw.jpg"},
       {src:"https://i.imghippo.com/files/sbn4421XkE.jpg"},
       {src:"https://i.imghippo.com/files/yJW1096IY.jpg"},
       {src:"https://i.imghippo.com/files/I5708NI.jpg"},
       {src:"https://i.imghippo.com/files/XZAi9937yUs.jpg"},
       {src:"https://i.imghippo.com/files/mhN6242vOk.jpg"},
       {src:"https://i.ibb.co/sdy4TxbN/extra2.jpg"},
       {src:"https://i.imghippo.com/files/pPL7770On.jpg"},
       {src:"https://i.imghippo.com/files/XxiP8067vTU.jpg"},
       {src:"https://i.imghippo.com/files/One6314gE.jpg"},
       {src:"https://i.imghippo.com/files/vMS8902Fw.jpg"}
    ];

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setOpen(true);
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                {/* ব্যানার সেকশন */}
                <div
                    className="h-20 flex items-center justify-center bg-cover bg-center mt-3"
                    style={{ backgroundImage: "url('https://i.imghippo.com/files/lnsg5986qY.jpg')" }}
                >
                    <h1 className="text-white text-3xl font-bold">Gallery</h1>
                </div>

                {/* লাইটবক্স কম্পোনেন্ট */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images} // আপনার ছবির অ্যারেটি এখানে পাস করুন
                    index={currentImageIndex} // লাইটবক্সটি এই ইন্ডেক্স থেকে শুরু হবে
                    // থাম্বনেইল প্লেগিন যোগ করুন
                    plugins={[Thumbnails]}
                />

                {/* থাম্বনেইল ছবির গ্যালারি */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            onClick={() => openLightbox(index)} // প্রতিটি ছবিতে ক্লিক ইভেন্ট যোগ করুন
                        >
                            <img
                                src={image.src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;