import React from "react";
import five_stars from "../../assets/images/illustration-five-stars.webp";
import soical_icons from "../../assets/images/illustration-multiple-platforms.webp";
import schedule from "../../assets/images/illustration-consistent-schedule.webp";
import schedule_post from "../../assets/images/illustration-schedule-posts.webp";
import grow_followers from "../../assets/images/illustration-grow-followers.webp";
import audience_followers from "../../assets/images/illustration-audience-growth.webp";
import create_post from "../../assets/images/illustration-create-post.webp";
import ai_content from "../../assets/images/illustration-ai-content.webp";

const Home = () => {
  return (
    <main>
      <div className="bg-slate-50 p-8">
        {/* 1st */}
        <div className="bg-violet-500  mt-12 p-12 text-center text-white rounded-2xl md:absolute md:w-[40%] md:top-0 md:m-8 md:left-[28%]">
          <div>
            <p className="text-5xl font-bold">
              Soical Media <br /> <span className="text-orange-200">10x</span>{" "}
              Faster <br /> with AI
            </p>
          </div>
          <span className="">
            <img src={five_stars} className="mx-auto pt-8" alt="five stars" />
          </span>
          <p className="text-2xl py-6 ">Over 4,000 5-star reviews</p>
        </div>

        {/* 2nd */}
        <div className="bg-white my-16 rounded-2xl p-8 md:absolute md:w-1/5 md:left-[30%] md:top-[52%]">
          <span>
            <span>
              <img src={soical_icons} alt="soical icons" />
            </span>
            <p className="py-6 text-3xl font-bold md:text-2xl">
              Manage multiple accounts and platforms.
            </p>
          </span>
        </div>

        {/* 3rd */}
        <div className="bg-[#FFCD6A] rounded-2xl px-8 md:absolute md:w-1/5 md:left-[50%] md:top-[62%]">
          <p className="text-5xl font-bold py-8 pr-5 md:text-2xl md:py-6 ">
            Maintain a consistent posting schedule.
          </p>
          <span>
            <img src={schedule} className="md:w-[65%]" alt="schedule" />
          </span>
        </div>

        {/* 4th */}
        <div className="bg-gray-200 rounded-2xl p-8 my-16 text-center md:absolute md:top-0 md:right-0 md:w-1/4 md:m-8 md:h-[90%]">
          <p className="text-4xl font-bold pt-5 pb-8">
            Schedule to social media.
          </p>
          <span>
            <img src={schedule_post} alt="" />
          </span>
          <p className="text-2xl py-6 px-12">
            Optimize post timings to publish <br /> content at the perfect time
            for <br />
            your audience.
          </p>
        </div>

        {/* 5th */}
        <div className="bg-violet-500 rounded-2xl p-8 text-white text-center md:absolute md:bottom-0 md:right-0 md:w-[48%] md:top-[95%] md:h-[42%] md:flex md:m-8">
          <span>
            <img
              className="mx-auto md:w-[98%] md:m-0 md:p-0"
              src={grow_followers}
              alt=""
            />
          </span>
          <p className="text-4xl font-bold pt-8 pb-10">
            Grow followers <br className="md:hidden" />
            with non-stop <br />
            content.
          </p>
        </div>

        {/* 6th */}
        <div className="bg-white rounded-2xl p-8 my-16 md:absolute md:w-1/6 md:left-[30%] md:top-[90%]">
          <p className="text-4xl font-bold">&gt;56%</p>
          <p className="text-3xl font-bold py-6">faster audience growth</p>
          <span>
            <img src={audience_followers} className="py-4" alt="" />
          </span>
        </div>

        {/* 7th */}
        <div className="bg-red-100 rounded-2xl p-8 md:absolute md:top-0 md:left-0 md:w-1/4 md:m-8">
          <p className="text-4xl font-bold py-8 px-8 md:px-2">
            Create and schedule <br /> content <br />
            <span className="text-violet-500">quicker.</span>
          </p>
          <span>
            <img src={create_post} className="md:py-8" alt="" />
          </span>
        </div>

        {/* 8th */}
        <div className="bg-[#FFCD6A] rounded-2xl p-8 my-16 md:absolute md:bottom-0 md:left-0 md:w-1/4 md:m-8 md:top-[68%] md:h-[69%]">
          <p className="text-5xl font-bold py-8 md:text-4xl md:pt-4">
            Write your content <br /> using AI.
          </p>
          <span>
            <img src={ai_content} alt="" />
          </span>
        </div>
      </div>
    </main>
  );
};

export default Home;
