import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="  flex flex-col items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg  max-w-4xl w-full text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">🚴‍♂️ About BikeHut</h1>
                <p className="text-gray-600 mb-6">
                    Welcome to <span className="font-semibold text-blue-600">BikeHut</span> – your one-stop destination for the best bicycles, accessories, and biking gear! We are committed to providing top-quality products for riders of all levels, from beginners to professionals.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">📌 Our Mission</h2>
                <p className="text-gray-600 mb-6">
                    At <span className="font-semibold text-blue-600">BikeHut</span>, our mission is to **promote a healthy and eco-friendly lifestyle** by offering premium bicycles and accessories. We believe that cycling is not just a mode of transport but a way to explore, exercise, and enjoy life.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">💡 Why Choose Us?</h2>
                <ul className="text-gray-600 list-disc text-left mx-auto max-w-2xl space-y-2">
                    <li>✔ High-quality bicycles and accessories</li>
                    <li>✔ Affordable pricing for all riders</li>
                    <li>✔ Expert support and guidance</li>
                    <li>✔ Passionate community of cyclists</li>
                </ul>

                {/* Call To Action */}
                <div className="mt-8">
                    <p className="text-lg font-semibold text-gray-800">
                        Ready to explore the world on two wheels?
                    </p>
                    <a
                        href="/shop"

                    >

                    </a>
                    <Link to={"/shop"}>
                        <button
                            className="mt-4 inline-block bg-[#22292f] text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-black transition"
                        >
                            Browse Our Collection
                        </button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;