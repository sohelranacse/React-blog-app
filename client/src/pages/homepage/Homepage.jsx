import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const [posts, setPosts] = useState([])

  const {search} = useLocation();
  // console.log(search);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      // console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
