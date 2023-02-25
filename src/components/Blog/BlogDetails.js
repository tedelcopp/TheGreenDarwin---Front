import { React, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../redux/actions/actionIndex";
import Navbar from "../NavBar/NavBar";
import s from "../Blog/BlogDetails.module.css";
import Footer from "../Footer/Footer";

export default function BlogDetails() {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(getBlogById(blogId));
  }, []);
  return (
    <>
    <Navbar />
    <div className={s.titleContent}>
          <u>
            Blogs
          </u>
      </div>
      <Link to = '/blogs'>
      <div className={s.backButton}>
        <h3>Back</h3>
      </div>
      </Link>
      <h1 className={s.tittle}>
        <h2>{blog.name}</h2>
      </h1>
      <div className={s.blogBody}>
      <div className={s.imagecontainer}>
        <img src={blog.img} alt="Img not found" />
      </div>
     
      <div className={s.paragraph}>{blog.text}</div>
    </div>
    <Footer />
    </>
  );
}
