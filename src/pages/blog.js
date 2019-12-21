import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const blogs = data.allMarkdownRemark.edges

  return (
    <div>
      <h1>Blog</h1>
      <p>Posts will show up here</p>
      <ol>
        {blogs.map((blog) => {
          const { title, date } = blog.node.frontmatter
          const { slug } = blog.node.fields
          return (
            <li key={title}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default BlogPage
