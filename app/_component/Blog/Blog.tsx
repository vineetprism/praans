import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react"; // Importing icons from Lucide
import { FaPinterest, FaWhatsapp } from "react-icons/fa"; // Fallback icons from react-icons
import Link from "next/link";
import Image from "next/image";

type BlogPost = {
    title: string;
    date: string;
    description: string;
    image: string;
    link: string;
};

const blogPosts: BlogPost[] = [
    {
        title: "Is it Necessary to Pay Minimum Wages under the Minimum Wages Act 1948?",
        date: "September 8, 2025",
        description:
            "Introduction Minimum wages protect workers from exploitation. It also ensures they receive a minimum wage to meet basic needs.",
        image: "/blog/1st.webp",
        link: "/blog-details",
    },
    {
        title: "Can You Get Fired for Interviewing? Termination of Employment Explained",
        date: "August 30, 2025",
        description:
            "For all professionals, changing jobs is a normal part of their career. Employees often look for new opportunities.",
        image: "/blog/2nd.webp",
        link: "/blog-details",
    },
    {
        title: "Gujarat Shop Act Licence Registration",
        date: "August 15, 2025",
        description: "Details about Gujarat's shop act and license registration.",
        image: "/blog/3rd.webp",
        link: "/blog-details",
    },
];

const BlogPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Spread the love section */}
            <div className="flex justify-between py-4">
                <div className="flex gap-3">
                    {/* Social media icons with orange color */}
                    <Link href="#" className="text-orange-400 hover:text-orange-500">
                        <Facebook size={24} />
                    </Link>
                    <Link href="#" className="text-orange-400 hover:text-orange-500">
                        <Twitter size={24} />
                    </Link>
                    <Link href="#" className="text-orange-400 hover:text-orange-500">
                        <Linkedin size={24} />
                    </Link>
                    <Link href="#" className="text-orange-400 hover:text-orange-500">
                        <FaPinterest size={24} />
                    </Link>
                    <Link href="#" className="text-orange-400 hover:text-orange-500">
                        <FaWhatsapp size={24} />
                    </Link>
                </div>
            </div>

            {/* Blog Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
                    >
                        {/* Image takes full height and width with responsive design */}
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 flex-grow">
                            <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                            <span className="text-gray-600 text-sm">{post.date} // No Comments</span>
                            <p className="mt-3 text-gray-700">{post.description}</p>
                            <Link
                                href={post.link}
                                className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-400"
                            >
                                Read More &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
