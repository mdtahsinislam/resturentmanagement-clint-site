import React from 'react';

const Chafe = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section: Chef Image and Food Preparation */}
                <div className="relative">
                    {/* Main Chef Image */}
                    <img
                        src="https://i.ibb.co/5XsZt45y/extra1.jpg" // Using the provided direct image URL for the main chef
                        alt="Smiling Chef"
                        className="rounded-lg shadow-xl w-full h-auto object-cover md:max-w-md mx-auto"
                    />
                    {/* Overlaid Food Preparation Image */}
                    <img
                        src="https://i.ibb.co/sdy4TxbN/extra2.jpg" // Using the provided direct image URL for extra2.jpg
                        alt="Food Preparation"
                        className="absolute bottom-0 md:bottom-[-20%] left-1/2 transform -translate-x-1/2 md:translate-x-[-10%] w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-2xl border-4 border-white"
                        style={{ maxWidth: '400px' }} // Added inline style for better control on smaller screens if needed
                    />
                </div>

                {/* Right Section: Text Content and Benefits */}
                <div className="text-gray-800 space-y-8">
                        <div className="text-gray-800 space-y-8">
  <p
    className="text-orange-500 font-semibold text-xl md:text-4xl"
    style={{ fontFamily: '"My Soul", cursive' }}
  >
    Our  Chef  Made  Delicious Food For Everyone 👨‍🍳
  </p>
</div>


                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Priately unleash &<br />
                        "outside the box"
                    </h1>
                    <p className="text-md sm:text-lg leading-relaxed">
                        Enthusiastically syndicate high-quality initiatives vis-a-vis functional internal or "organic" sources.
                        Intrinsically formulate intuitive benefits through client-based content. Assertively embrace intuitive
                        quality vectors rather than holistic process improvements.
                    </p>

                    <div className="space-y-6 mt-8">
                        {/* Quiet Environment */}
                        <div className="flex items-center space-x-4">
                            {/* Icon for Quiet Environment */}
                            <div className="flex-shrink-0 p-3 rounded-full bg-orange-100 text-orange-500">
                                {/* This would typically be an SVG icon. For simplicity, we'll use a placeholder or assume an SVG library. */}
                                {/* For a real project, you might use an icon library like Heroicons or Font Awesome. */}
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.546-9.626a9 9 0 010 12.728m-4.505-1.011l-3.232 3.232m12.441-1.28l-3.232 3.232m-8.995-12.232a4 4 0 010 5.656m-2.546-9.626a8 8 0 010 11.314" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Quiet Environment</h3>
                                <p className="text-gray-600">Objectively transition virtual functionalities via enterprise-wide benefits.</p>
                            </div>
                        </div>

                        {/* Hygienic Food */}
                        <div className="flex items-center space-x-4">
                            {/* Icon for Hygienic Food */}
                            <div className="flex-shrink-0 p-3 rounded-full bg-orange-100 text-orange-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.504A9.951 9.951 0 0112 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.747-.468-3.398-1.295-4.796M12 18V6" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Hygienic Food</h3>
                                <p className="text-gray-600">Objectively transition virtual functionalities via enterprise-wide benefits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chafe;