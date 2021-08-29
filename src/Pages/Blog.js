import React, { useEffect, useState } from "react";
import sanityClient from "../Other/Sanity";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Blog() {
  const MyBlog = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
  `;
  const BlogWrapper = styled.div`
    width: ${(props) => props.theme.width};
    margin: auto;
    min-height: 80vh;
  `;

  const BlogPosts = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    a {
      text-decoration: none;
    }
  `;

  const BlogPost = styled.div`
    height: 50vh;
    flex: 1 1 20rem;
    background: black;
    margin: 1rem;
    border-radius: 10px;
  `;

  const BlogPostBackground = styled.div`
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    border-radius: 10px;
  `;

  const BlogPostText = styled.h3`
    background: ${(props) => props.theme.secondaryBodyColor};
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    color: ${(props) => props.theme.secondaryTextColor};
    border-top: 1px solid black;
  `;

  const TitleHeader = styled.h1`
    color: ${(props) => props.theme.headerColor};
    text-align: center;
    padding: 2rem 0rem;
    font-size: ${(props) => props.theme.headerFontSize};
    }
  `;

  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            }
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <MyBlog>
      <BlogWrapper>
        <TitleHeader>Welcome to my blog!</TitleHeader>
        <BlogPosts>
          {allPosts &&
            allPosts.map((post, index) => (
              <BlogPost>
                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    <BlogPostBackground
                      style={{
                        backgroundImage: `url(${post.mainImage?.asset?.url})`,
                      }}
                    >
                      <BlogPostText>{post.title}</BlogPostText>
                    </BlogPostBackground>
                  </span>
                </Link>
              </BlogPost>
            ))}
        </BlogPosts>
      </BlogWrapper>
    </MyBlog>
  );
}

export default Blog;
