import React, { useEffect } from 'react'

import Layout from '../components/Layout'
import PageFooter from '../components/PageFooter'
import SideBar from '../components/SideBar'
import config from '../../config'

import pic2 from '../assets/images/pic02.jpg'
import pic3 from '../assets/images/pic03.jpg'
import pic4 from '../assets/images/pic04.jpg'
import pic5 from '../assets/images/pic05.jpg'
import pic6 from '../assets/images/pic06.jpg'
import pic7 from '../assets/images/pic07.jpg'
import pic8 from '../assets/images/pic08.jpg'
import Scroll from '../components/Scroll'
import { graphql, useStaticQuery } from 'gatsby'

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
]

const IndexPage = ({ location, navigate }) => {
  useEffect(() => {
    if (location.href.includes('#')) {
      const allSectionIds = sections.map((section) => section.id)
      const [, idToPushTo] = location.href.split('#')
      if (allSectionIds.includes(idToPushTo)) navigate(`#${idToPushTo}`, { replace: true })
    }
  }, []) // eslint-disable-line

  const data = useStaticQuery(graphql`
    query {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  const allPaths = data.allSitePage.edges.map((edge) => edge.node.path)
  const [dragDropPath] = allPaths.filter((path) => path.includes('dragndrop'))

  return (
    <Layout>
      <SideBar sections={sections} />

      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                Hi! I'm <strong>{config.authorGivenNames}</strong>
                <br />
                Full Stack Developer
              </h2>
              <p>Scroll down to check out some of my projects.</p>
            </header>

            <footer>
              <Scroll type="id" element={'portfolio'}>
                <a href="#portfolio" className="button">
                  Show me
                </a>
              </Scroll>
            </footer>
          </div>
        </section>

        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>Portfolio</h2>
            </header>

            <div className="row">
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href={dragDropPath} className="image fit">
                    <img src={pic2} alt="Drag and Drop Thumbnail" />
                  </a>
                  <header>
                    <h3>Drag and Drop</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic3} alt="" />
                  </a>
                  <header>
                    <h3>Rhoncus Semper</h3>
                  </header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic4} alt="" />
                  </a>
                  <header>
                    <h3>Magna Nullam</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic5} alt="" />
                  </a>
                  <header>
                    <h3>Natoque Vitae</h3>
                  </header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic6} alt="" />
                  </a>
                  <header>
                    <h3>Dolor Penatibus</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic7} alt="" />
                  </a>
                  <header>
                    <h3>Orci Convallis</h3>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>

            <a href="/#" className="image featured">
              <img src={pic8} alt="" />
            </a>

            <p>
              I am a full stack developer based in Vancouver. I have been working in web development since 2019, and
              dabbling since 2017.
              <br />I enjoy creating innovative solutions for today's problems.
            </p>
          </div>
        </section>

        <section id="contact" className="four">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>

            <p>
              Want to chat? Fill out the form below and I will email you as soon as possible.
              <br />
              Alternatively, you can find me on{' '}
              <a href={config.urls.linkedin} target="_blank">
                LinkedIn
              </a>
              .
            </p>

            <form method="post" action="#">
              <div className="row">
                <div className="col-6 col-12-mobile">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message" />
                </div>
                <div className="col-12">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <PageFooter />
    </Layout>
  )
}

export default IndexPage
