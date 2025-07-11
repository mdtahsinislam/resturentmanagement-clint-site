import React from 'react';

const Feadback = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">OUR TESTIMONIALS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Our Client Feedback
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Enthusiastically syndicate high-quality initiatives vis-a-vis functional internal or "organic" sources. Intrinsically formulate intuitive benefits through client-based content. Assertively embrace intuitive quality vectors rather than holistic process improvements.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center">
                            <img
                                className="h-16 w-16 rounded-full object-cover"
                                src="https://i.ibb.co/Q3tz2hWc/f1.jpg" // Replace with actual image path
                                alt="Marvin"
                            />
                            <div className="ml-4">
                                <p className="text-lg font-medium text-gray-900">Marvin</p>
                                <p className="text-sm text-gray-500">Teacher</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Consectetur adipiscing elit. Maiores a molestias, exercitationem at? Neque eaque modi minus
                            consequuntur sapiente amet.
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center">
                            <img
                                className="h-16 w-16 rounded-full object-cover"
                                src="https://i.ibb.co/GvxGFHQb/f2.jpg" // Replace with actual image path
                                alt="McKinney"
                            />
                            <div className="ml-4">
                                <p className="text-lg font-medium text-gray-900">McKinney</p>
                                <p className="text-sm text-gray-500">Marketing Officer</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Consectetur adipiscing elit. Maiores a molestias, exercitationem at? Neque eaque modi minus
                            consequuntur sapiente amet.
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center">
                            <img
                                className="h-16 w-16 rounded-full object-cover"
                                src="https://i.ibb.co/H66m5rx/f3.jpg" // Replace with actual image path
                                alt="Brooklyn"
                            />
                            <div className="ml-4">
                                <p className="text-lg font-medium text-gray-900">Brooklyn</p>
                                <p className="text-sm text-gray-500">Sportsman</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Consectetur adipiscing elit. Maiores a molestias, exercitationem at? Neque eaque modi minus
                            consequuntur sapiente amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feadback;