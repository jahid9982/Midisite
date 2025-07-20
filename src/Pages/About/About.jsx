import React from 'react';

const About = () => {
    return (
        <section className="min-h-screen bg-white text-gray-800 px-4 py-16 mt-10">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-5xl font-bold text-[#34C9B6] mb-4">About Us</h1>
                <p className="text-lg text-gray-600">
                    We're passionate about providing excellent service and building solutions that matter.
                </p>
            </div>

            {/* About Description */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://i.ibb.co/4wXx67MY/01.png"
                    alt="Our Team"
                    className="w-full rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-gray-700 mb-4">
                        At Medisite, we are a team of creative, driven, and experienced individuals committed to delivering top-notch services in the healthcare and tech industry.
                    </p>
                    <p className="text-gray-700">
                        Our mission is to empower businesses and improve lives through innovation, transparency, and technology.
                    </p>
                </div>
            </div>

            {/* Feature Highlights */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8 text-[#34C9B6]">Why Choose Us?</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: '💡', title: 'Innovation', desc: 'We bring fresh ideas and forward-thinking to every project.' },
                        { icon: '🤝', title: 'Collaboration', desc: 'We work closely with clients to deliver tailored solutions.' },
                        { icon: '🚀', title: 'Results-Driven', desc: 'We focus on outcomes that drive growth and impact.' },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="bg-[#f0fdfa] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default About;