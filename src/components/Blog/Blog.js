import { React } from "react";
import { Link } from "react-router-dom";
import s from "../Blog/Blog.module.css";

export default function Blog({ blog }) {
  return (
    <div
      className={s.container}
      style={{ backgroundImage: `url(${blog.img})` }}
    >
      <h3 className={s.blogName}>
        <span className={s.blogSpan}>{blog.name}</span>
      </h3>

      <Link to={`/blogs/${blog.id}`}>
        <div className={s.button}>
          <h4>Read More</h4>
        </div>
      </Link>
    </div>
  );
}
