import React from "react";
import { Gpt3SecoundCard } from "../components";
import { blog01 } from "../assets";
import { BlogDatas } from "../utils/Datas";
const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="blog-heading">
        <h1>
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          <Gpt3SecoundCard
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog-container_groupB">
          {BlogDatas.map((data, index) => (
            <Gpt3SecoundCard
              key={index}
              text={data.text}
              date={data.date}
              imgUrl={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
