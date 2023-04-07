import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../../redux/actions/actionIndex";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/pagination";
import NavBar from "../NavBar/NavBar";
import Blog from "./Blog";
import s from "./Blogs.module.css";

export default function Blogs() {
  const blogs = useSelector((state) => state.blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsXPage, setBlogXPage] = useState(3);
  const iLastBlog = currentPage * blogsXPage;
  const iFirstBlog = iLastBlog - blogsXPage;
  const currentBlogs = blogs.slice(iFirstBlog, iLastBlog);
  const currentPages = blogs.length / blogsXPage;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const nextPage = () => {
    if (currentPages > currentPage) setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <NavBar />
      <div className={s.titleContent}>
        <u>Blogs</u>
      </div>
      <div className={s.blogSection}>
        <div className={s.BlogTextContent}>
          <h3 className={s.BlogText}>Welcome to our blog section!</h3>
          <h3 className={s.BlogText}>
            As a nursery, we are passionate about all things related to plants
            and gardening, and we are thrilled to have this platform to share
            our knowledge and expertise with you. We hope you find our blog
            informative and enjoyable, and we look forward to growing together
            in our love for all things green and growing!
          </h3>
          <h3 className={s.BlogText}>
            In this space, we'll be sharing tips and tricks on plant care,
            gardening trends, and ideas to help you create a beautiful and
            thriving green space in your home or office.
          </h3>
        </div>
      </div>
      <div className={s.BlogBody}>
        {currentPage === 1 ? null : (
          <button onClick={previousPage} className={s.blogButton}>
            <b>Previous</b>
          </button>
        )}
        {currentBlogs?.length
          ? currentBlogs.map((blog, key) => {
              return <Blog key={key} blog={blog} />;
            })
          : null}
        {currentPages === currentPage ? null : (
          <button onClick={nextPage} className={s.blogButton}>
            <b>Next</b>
          </button>
        )}
      </div>
      <Pagination
        productsXPage={blogsXPage}
        plants={blogs.length}
        pagination={pagination}
        currentPage={currentPage}
        notShow={true}
      />
      <Footer />
    </div>
  );
}
