import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../Other/Sanity";
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";

const Loading = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 3rem;
  }
`;

const BlogPostSection = styled.section`
  min-height: 100vh;
`;

const Wallpaper = styled.div`
  background-size: cover;
  background-position: center;
  height: 40vh;
  display: flex;
  align-items: center;
`;

const BlogPostWrapper = styled.div`
  width: ${(props) => props.theme.width};
  margin: auto;
`;

const TitleHeader = styled.h2`
  font-size: ${(props) => props.theme.largeHeaderFontSize};
  padding: 2rem 0rem;
`;

function BlogPost() {
  const [blogPost, setBlogPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "author": author->image

       }`,
        { slug }
      )
      .then((data) => setBlogPost(data[0]))

      .catch(console.error);
  }, [slug, blogPost]);

  if (!blogPost)
    return (
      <Loading>
        <h2>Fetching the post, I'll be right back ⌛️</h2>
      </Loading>
    );

  return (
    <BlogPostSection>
      <Wallpaper
        style={{ backgroundImage: `url(${blogPost.mainImage.asset.url})` }}
      ></Wallpaper>
      <BlogPostWrapper>
        <div>
          <TitleHeader>{blogPost.title}</TitleHeader>
          <BlockContent
            blocks={blogPost.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
            style={{maxWidth: "100vw"}}
          />
        </div>
      </BlogPostWrapper>
    </BlogPostSection>
  );
}

export default BlogPost;
