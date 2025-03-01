import React, { useState } from "react";
// import CardBerita from '../ComponentsBerita/CardBerita'
// import HeroSectionBerita from '../ComponentsBerita/HeroSectionBerita'
import HeroBerita from "../Blog/HeroBerita";
import SearchBar from "../Blog/SearchBar";
import EmptyList from "../Blog/EmptyList/Index";
import BlogList from "../Blog/BlogList/index";
import { blogList } from "../Blog/ConfigData/data";

const Berita = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <HeroBerita />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Berita;
