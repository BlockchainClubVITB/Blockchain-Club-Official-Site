import { useEffect, useState } from "react";
import { BackgroundBoxesDemo } from "../BackgroundBoxes";
import { NavLink } from "react-router-dom";
import blogData from "./data/blogData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function BlogHome() {
  const [latestBlog, setLatestBlog] = useState([{}]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    setLatestBlog([blogData[0], blogData[1], blogData[2]]);
    setRecentBlogs(blogData.slice(0));
  }, []);

  return (
    <div className="bg-gray-950">
      <BackgroundBoxesDemo
        heading={"OUR BLOG"}
        subheading={"Read the latest and recent blogs on our site."}
      />
      <div className="p-4 md:w-full rounded-md mt-8">
        <Swiper
          spaceBetween={30}
          style={{
<<<<<<< HEAD
            "--swiper-navigation-color": "#FFA500",
            "--swiper-pagination-color": "#FFA500",
=======
            "--swiper-navigation-color": "#f7921a",
            "--swiper-pagination-color": "#f7921a",
>>>>>>> ec3cdb5 (Initial commit with website changes)
          }}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {latestBlog.map((blog) => (
            <div className="m-3 p-3" key={blog.id}>
<<<<<<< HEAD
              <SwiperSlide className="bg-orange-400" key={blog.id}>
=======
              <SwiperSlide className="bg-accent" key={blog.id}>
>>>>>>> ec3cdb5 (Initial commit with website changes)
                <NavLink to={`/blog/${blog.id}`}>
                  <div
                    className="flex flex-col"
                    style={{
                      backgroundImage: `url(${blog.cover})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="h-96"></div>
                    <div className="text-white bg-black bg-opacity-40">
                      <div className="flex flex-col mx-2 my-4 ">
                        <div className="text-xl md:text-4xl p-0.5">
                          {blog.title}
                        </div>
                        <div className="text-lg md:text-2xl px-0.5 pb-1 mt-2">
                          {blog.subtitle}
                        </div>
                        <div className="px-0.5">
                          <div className="flex md:text-xl justify-between mt-1">
                            <div className="">{blog.date}</div>
                            <div className="">{blog.readTime}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
      <div className="m-8 p-8">
<<<<<<< HEAD
        <div className="p-4 my-4 text-3xl md:text-5xl text-orange-500 text-center">
=======
        <div className="p-4 my-4 text-3xl md:text-5xl text-accent text-center">
>>>>>>> ec3cdb5 (Initial commit with website changes)
          Hot Articles :
          <hr className="border-white mb-4 mx-auto w-1/2 mt-6" />
        </div>
        <div className="flex flex-wrap justify-center">
          {recentBlogs.map((blog) => (
            <div
              className="bg-gray-100 bg-opacity-30 hover:bg-opacity-50 cursor-pointer rounded m-x-fit m-4 p-4 w-full md:w-96"
              key={blog.id}
            >
              <img
                src={blog.thumbnail}
                alt="Thumbnail"
                className="w-full h-50 object-cover rounded-lg"
              />
              <div className="flex backdrop-blur-sm flex-col mx-2 my-4">
                <div className="text-lg md:text-xl text-white p-0.5">
                  {blog.title}
                </div>
                <div className="text-sm md:text-md text-white px-0.5 pb-1">
                  {blog.subtitle}
                </div>
<<<<<<< HEAD
                <div className="px-0.5 text-orange-500">
=======
                <div className="px-0.5 text-accent">
>>>>>>> ec3cdb5 (Initial commit with website changes)
                  <div className="flex md:text-xl justify-between">
                    <div className="">{blog.date} ,&nbsp;</div>
                    <div className="">{blog.readTime}</div>
                  </div>
                </div>
              </div>
              <NavLink to={`/blog/${blog.id}`}>
<<<<<<< HEAD
                <span className="text-white hover:text-orange-500 mx-2">
=======
                <span className="text-white hover:text-accent mx-2">
>>>>>>> ec3cdb5 (Initial commit with website changes)
                  Read More...
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogHome;
