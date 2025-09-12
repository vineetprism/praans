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

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Social Media Links */}
            <div className="flex justify-between py-4">
                <div className="flex gap-3">
                    <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
                        <Facebook size={24} />
                    </Link>
                    <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
                        <Twitter size={24} />
                    </Link>
                    <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
                        <Linkedin size={24} />
                    </Link>
                    <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
                        <FaPinterest size={24} />
                    </Link>
                    <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
                        <FaWhatsapp size={24} />
                    </Link>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <article
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Image Container - Fixed aspect ratio */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                priority={index < 3} // Prioritize loading for first 3 images
                            />
                        </div>
                        
                        {/* Content Container */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                                {post.title}
                            </h2>
                            
                            <div className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                                <time dateTime={post.date}>{post.date}</time>
                                <span>•</span>
                                <span>No Comments</span>
                            </div>
                            
                            <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                                {post.description}
                            </p>
                            
                            <Link
                                href={post.link}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                Read More
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}