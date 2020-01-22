/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const DigitalOceanReplication = () => (
<React.Fragment>
    <header className="header">
      <div className="header__detailed-info">
        <div className="header__news">
          <p className="header__news-highlight">new</p>
          <a className="header__recent-news" href="#">
            DigitalOcean Kubernetes is now Generally Available. Learn more >
          </a>
        </div>
        <nav className="header__detailed-nav">
          <ul className="header__nav-items">
            <li className="header__nav-item">
              <a className="header__nav-item--link" href="#">Docs</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-item--link" href="#">Support</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-item--link" href="#">Sales</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-item--link" href="#">Log in</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="header__main-nav-bar">
        <div className="header__company-logo-container">
          <img className="company-logo" src="./assets/DigitalOcean-logo.svg" alt="Digital Ocean Logo" />
        </div>
        <ul className="header__main-nav">
          <li className="header__main-nav-item">
            <a className="header__main-nav-item--link" href="#">
              Products
            </a>
          </li>
          <li className="header__main-nav-item">
            <a className="header__main-nav-item--link" href="#">
              Marketplace
            </a>
          </li>
          <li className="header__main-nav-item">
            <a className="header__main-nav-item--link" href="#">Customers</a>
          </li>
          <li className="header__main-nav-item">
            <a className="header__main-nav-item--link" href="#">partners</a>
          </li>
          <li className="header__main-nav-item">
            <a className="header__main-nav-item--link" href="#">community</a>
          </li>
          <li className="header__main-nav-item">
            <a className="header__main-nav-item--link" href="#">pricing</a>
          </li>
        </ul>
        <button className="header__cta">Sign Up</button>
      </nav>
    </header>

    <section className="hero">
      <div className="hero__welcome">
        <h1 className="hero__title">Welcome to the developer cloud</h1>
        <h2 className="hero__subtitle">
          We make it simple to launch in the cloud and scale up as you
          grow--whether you're running one virtual machine or ten thousand.
        </h2>
      </div>
      <form className="signup">
        <h1 className="signup__title">Deploy in seconds</h1>
        <input
          className="signup__input signup__input--email"
          placeholder="Email Address"
          type="email"
          name="email"
          id="email"
        />
        <input
          className="signup__input signup__input--password"
          placeholder="Password"
          type="password"
          name="#"
          id="#"
        />
        <button className="signup__button signup__button--submit" type="submit">
          Create your account
        </button>
        <button className="signup__button signup__button--google">
          <img className="signup__button-logo" src="./assets/google-favicon-512.png" alt="Google logo" />
          <p className="signup__button-text">Sign up with Google</p>
        </button>
        <p className="signup__agreement">
          By signing up you agree to the
          <a className="signup__agreement signup__agreement--link" href="#">Terms of Service</a>.
        </p>
      </form>
    </section>

    <section className="other-customers">
      <h1 className="other-customers__title">
        Innovative businesses trust digitalocean
      </h1>
      <ul className="other-customers__logos">
        <li className="other-customers__logo-container">
          <img className="other-customers__logo" src="./assets/docker.png" alt="Docker" />
        </li>
        <li className="other-customers__logo-container">
          <img className="other-customers__logo" src="./assets/gitlab.png" alt="GitLab" />
        </li>
        <li className="other-customers__logo-container">
          <img className="other-customers__logo" src="./assets/slack.png" alt="slack" />
        </li>
        <li className="other-customers__logo-container">
          <img className="other-customers__logo" src="./assets/hashicorp.png" alt="HashiCorp" />
        </li>
        <li className="other-customers__logo-container">
          <img className="other-customers__logo" src="./assets/wework.png" alt="wework" />
        </li>
        <li className="other-customers__logo-container">
          <img className="other-customers__logo" src="./assets/splunk.png" alt="splunk" />
        </li>
      </ul>
      <a href="#" className="other-customers__cta">View customer stories ></a>
    </section>

    <section className="sales-pitch-one">
      <h1 className="sales-pitch-one__title">Deploy and scale seamlessly</h1>
      <p className="sales-pitch-one__pitch">
        Our optimized configuration process saves your team time when running
        and scaling distriuted applications, AI & machine learning workloads,
        hosted services, client websites, or CI/CD environments.
      </p>
      <div className="sales-pitch-one__details-container">
        <div className="sales-pitch-one__detail-interactive-container">
          <input
            className="sales-pitch-one__detail-radio"
            type="radio"
            name="services"
            id="deploy"
            checked
          />
          <label htmlFor="deploy" className="sales-pitch-one__detail-label">Deploy</label>
          <div className="sales-pitch-one__pitch-details-container">
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon UnifiedMobileNav-productIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" aria-hidden="true"><path fill="none" stroke="#0069FF" stroke-width="2" d="M36.779 23.119c0 7.962-6.454 14.416-14.416 14.416-7.962 0-14.416-6.454-14.416-14.416 0-7.962 6.454-14.417 14.416-14.417 7.962 0 14.416 6.455 14.416 14.417zm-9.212.031c0 2.844-2.306 5.151-5.151 5.151-2.845 0-5.151-2.307-5.151-5.151 0-2.845 2.306-5.151 5.151-5.151 2.845 0 5.151 2.306 5.151 5.151zm-5.153-5.291V3.435v14.424zM6.999 10.598l11.22 9.136-11.22-9.136zm30.833 0l-11.219 9.136 11.219-9.136zm4.001 16.795l-14.11-3.095 14.11 3.095zM3 27.393l14.11-3.095L3 27.393zM31.2 41l-6.405-13.343L31.2 41zm-17.558 0l6.304-13.343L13.642 41z"></path></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Kubernetes in minutes
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Spin up a managed Kubernetes cluster in just a few clicks.
                Simply specify the size and location of your worker nodes.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient id="aopti" x1="50.055%" x2="50.055%" y1="2.475%" y2="96.438%"><stop offset="0%" stop-color="#0069FF" stop-opacity=".3"></stop><stop offset="100%" stop-color="#0069FF" stop-opacity="0"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path stroke="#0069FF" stroke-width="2" d="M3 11.121v18.108l17.271 10.028L37.45 29.229V11.121L20.271 1.186z" opacity=".2"></path><path fill="url(#aopti)" fill-rule="nonzero" d="M0 22.936v5.293l17.271 10.028L34.45 28.229v-5.293L17.271 13z" transform="translate(3 1)"></path><path stroke="#0069FF" stroke-width="2" d="M3 23.936v5.293l17.271 10.028L37.45 29.229v-5.293L20.271 14z"></path><path stroke="#0069FF" stroke-width="2" d="M3 23.936l17.271 9.935 17.179-9.935"></path><path fill="#FFF" fill-rule="nonzero" stroke="#120078" stroke-width="2" d="M20.2714 7.7786S12.5643 13.4429 12.5643 19.2c0 4.2714 3.4357 7.7071 7.7071 7.7071 4.2715 0 7.7072-3.4357 7.7072-7.7071 0-5.5714-7.7072-11.4214-7.7072-11.4214z"></path><path stroke="#0069FF" stroke-width="2" d="M3 11.4l17.271 9.936L37.45 11.4" opacity=".2"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Flexible compute types
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                With Standard, General Purpose, or CPU-Optimized Droplets,
                choose the right infrastructure for your workload.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="11.123%" y1="109.271%" x2="80.386%" y2="3.434%" id="aprebu"><stop stop-color="#0069FF" stop-opacity=".6" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1="11.231%" y1="109.543%" x2="80.289%" y2="3.243%" id="bprebu"><stop stop-color="#0069FF" stop-opacity=".6" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#aprebu)" fill-rule="nonzero" opacity=".3" d="M24.93 12.96V.9H8.73v12.06z" transform="translate(3.5 2)"></path><path stroke="#0069FF" stroke-width="2" opacity=".3" d="M28.414 2.876v12.06h-16.2V2.876z"></path><path fill="#FFFFFF" fill-rule="nonzero" d="M32.59 7.593v18.09H8.11V7.593z"></path><path fill="url(#bprebu)" fill-rule="nonzero" d="M29.07 23.76V5.67H4.59v18.09z" transform="translate(3.5 2)"></path><path stroke="#0069FF" stroke-width="2" d="M32.59 7.593v18.09H8.11V7.593z"></path><path stroke="#120078" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero" d="M3.522 37.985v-25.2h33.66v25.2z"></path><g stroke="#120078" stroke-width="2"><path d="M20.33 20.81v9.09M15.74 25.4h9.18"></path></g></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                1-click App Marketplace
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Quickly deploy projects using one of our preconfigured 1-Click
                Apps, like LAMP, Docker, and WordPress.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="49.963%" y1="1.851%" x2="49.963%" y2="99.243%" id="a"><stop stop-color="#0069FF" stop-opacity=".3" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g transform="translate(4.3 1)" fill="none" fill-rule="evenodd"><circle fill="url(#a)" fill-rule="nonzero" cx="16.185" cy="22.815" r="16.185"></circle><ellipse fill="#FFFFFF" fill-rule="nonzero" cx="16.185" cy="22.815" rx="16.185" ry="6.143"></ellipse><path d="M0 22.815c0-3.413 7.215-6.143 16.185-6.143 8.97 0 16.185 2.73 16.185 6.143" stroke="#0069FF" stroke-width="2" opacity=".4"></path><path d="M16.185 39c-3.412 0-6.142-7.215-6.142-16.185 0-8.97 2.73-16.185 6.142-16.185" stroke="#0069FF" stroke-width="2" opacity=".4"></path><path d="M32.37 22.815c0 3.412-7.215 6.142-16.185 6.142C7.215 28.957 0 26.227 0 22.816" stroke="#0069FF" stroke-width="2"></path><path d="M16.185 6.63c3.413 0 6.143 7.215 6.143 16.185 0 8.97-2.73 16.185-6.143 16.185" stroke="#0069FF" stroke-width="2"></path><circle stroke="#0069FF" stroke-width="2" cx="16.185" cy="22.815" r="16.185"></circle><g transform="translate(8.775)" stroke="#120078" stroke-width="2"><path d="M14.332 6.923c0 5.167-6.922 10.237-6.922 10.237S.487 11.895.487 6.922C.487 3.12 3.607 0 7.41 0s6.922 3.12 6.922 6.923z" fill="#FFFFFF" fill-rule="nonzero"></path><circle cx="7.41" cy="7.02" r="2.34"></circle></g></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Global availability
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Deploy to any of our data center locations – New York, SF,
                London, Amsterdam, Bangalore, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="sales-pitch-one__detail-interactive-container">
          <input
            className="sales-pitch-one__detail-radio"
            type="radio"
            name="services"
            id="scale"
          />
          <label htmlFor="scale" className="sales-pitch-one__detail-label">scale</label>
          <div className="sales-pitch-one__pitch-details-container">
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="28.458%" y1="84.156%" x2="70.705%" y2="31.688%" id="ascaleresize"><stop stop-color="#0069FF" stop-opacity=".3" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M16.4 38.6h3.5c7.454-.006 13.494-6.046 13.5-13.5 0-9.7-13.5-20-13.5-20S6.4 15 6.4 25.1v3.3" stroke="#0069FF" stroke-width="2"></path><path d="M12.3 37.6h2.4a9.28 9.28 0 0 0 9.3-9.3c0-6.7-9.3-13.8-9.3-13.8s-9.3 6.8-9.3 13.8v2.3" fill="url(#ascaleresize)" fill-rule="nonzero" transform="translate(1 1)"></path><path d="M17.3 38.5a9.34 9.34 0 0 0 7.7-9.2c0-6.7-9.3-13.8-9.3-13.8S8 21.1 6.6 27.4" stroke="#0069FF" stroke-width="2" opacity=".3"></path><path d="M6.4 33.9c0-3.6 4.8-7.1 4.8-7.1s4.8 3.6 4.8 7.1a4.8 4.8 0 1 1-9.6 0z" stroke="#120078" stroke-width="2" fill="#FFF" fill-rule="nonzero"></path><path stroke="#120078" stroke-width="2" d="M34.4 1h5.4v5.4M1 6.4V1h5.4m33.4 31.4v5.4h-5.4"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Resize
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Quickly scale up, scale down, or migrate to different Droplet types to meet the demands of your customers.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="49.597%" y1="113.983%" x2="49.597%" y2="-14.334%" id="afloating"><stop stop-color="#0069FF" stop-opacity=".5" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g transform="translate(1 2)" fill="none" fill-rule="evenodd"><path d="M34.815 26.634v-5.136c0-2.093-1.713-3.71-3.71-3.71h-5.422c-3.33 0-6.088-2.759-6.088-6.088V3.33" stroke="#0069FF" stroke-width="2"></path><path d="M4.185 26.634v-5.136c0-2.093 1.713-3.71 3.71-3.71h5.422c3.33 0 6.088-2.759 6.088-6.088V3.33" stroke="#0069FF" stroke-width="2" opacity=".3"></path><path d="M4.185 26.634S0 29.678 0 32.912c0 2.283 1.902 4.186 4.185 4.186 2.283 0 4.186-1.903 4.186-4.186.095-3.044-4.186-6.278-4.186-6.278z" stroke="#0069FF" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M34.815 27.776v-6.183c0-2.093-1.713-3.71-3.71-3.71h-5.422c-3.33 0-6.088-2.759-6.088-6.088V4.28" stroke="url(#afloating)" stroke-width="7" stroke-linecap="round"></path><circle stroke="#120078" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero" cx="19.5" cy="3.329" r="3.329"></circle><path d="M34.815 26.634s-4.186 3.044-4.186 6.278c0 2.283 1.903 4.186 4.186 4.186S39 35.195 39 32.912c0-3.044-4.185-6.278-4.185-6.278z" stroke="#120078" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero"></path><circle fill="#0069FF" fill-rule="nonzero" cx="34.815" cy="33.102" r="1.237"></circle></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Floating IPs
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Redirect network traffic between your Droplets using a Floating IP.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="50.12%" y1="29.025%" x2="50.12%" y2="103.864%" id="aloadbal"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1=".089%" y1="50.61%" x2="100.199%" y2="50.61%" id="bloadbal"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g transform="translate(8)" fill="none" fill-rule="evenodd"><path d="M12.098 19.22s-8.196-.196-10.244 2.048C.293 23.024 0 25.561 0 27.902 0 34.537 5.463 40 12.098 40c6.731 0 12.097-5.463 12.097-12.098 0-1.95-.488-4-1.56-5.853-1.757-3.22-10.537-2.83-10.537-2.83z" fill="url(#aloadbal)" fill-rule="nonzero"></path><ellipse fill="url(#bloadbal)" fill-rule="nonzero" cx="12.098" cy="22.049" rx="10.049" ry="3.317"></ellipse><ellipse stroke="#0069FF" stroke-width="2" cx="12.098" cy="22.049" rx="10.049" ry="3.317"></ellipse><path d="M12.098 9.854S0 18.732 0 27.804C0 34.538 5.463 40 12.098 40c6.731 0 12.097-5.463 12.097-12.098.098-8.78-12.097-18.048-12.097-18.048z" stroke="#120078" stroke-width="2"></path><path d="M2.341 5.268v6.927M23.707 7.415v8.487M9.561 0v7.122M16.878 1.951v6.927" stroke="#0069FF" stroke-width="2" opacity=".3"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Load Balancers
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Keep your application up and running smoothly by distributing traffic across Droplets, including those running as Kubernetes worker nodes.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="50.12%" y1="29.025%" x2="50.12%" y2="103.864%" id="aloadbal"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1=".089%" y1="50.61%" x2="100.199%" y2="50.61%" id="bloadbal"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g transform="translate(8)" fill="none" fill-rule="evenodd"><path d="M12.098 19.22s-8.196-.196-10.244 2.048C.293 23.024 0 25.561 0 27.902 0 34.537 5.463 40 12.098 40c6.731 0 12.097-5.463 12.097-12.098 0-1.95-.488-4-1.56-5.853-1.757-3.22-10.537-2.83-10.537-2.83z" fill="url(#aloadbal)" fill-rule="nonzero"></path><ellipse fill="url(#bloadbal)" fill-rule="nonzero" cx="12.098" cy="22.049" rx="10.049" ry="3.317"></ellipse><ellipse stroke="#0069FF" stroke-width="2" cx="12.098" cy="22.049" rx="10.049" ry="3.317"></ellipse><path d="M12.098 9.854S0 18.732 0 27.804C0 34.538 5.463 40 12.098 40c6.731 0 12.097-5.463 12.097-12.098.098-8.78-12.097-18.048-12.097-18.048z" stroke="#120078" stroke-width="2"></path><path d="M2.341 5.268v6.927M23.707 7.415v8.487M9.561 0v7.122M16.878 1.951v6.927" stroke="#0069FF" stroke-width="2" opacity=".3"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Pay for what you use
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                With hourly billing, only pay for the resources that you actually use.
              </p>
            </div>
          </div>
        </div>
        <div className="sales-pitch-one__detail-interactive-container">
          <input
            className="sales-pitch-one__detail-radio"
            type="radio"
            name="services"
            id="store"
          />
          <label htmlFor="store" className="sales-pitch-one__detail-label">store</label>
          <div className="sales-pitch-one__pitch-details-container">
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="0%" y1="49.968%" y2="49.968%" id="amandat"><stop stop-color="#0069FF" stop-opacity=".3" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity=".2" offset="36%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1="0%" y1="50.064%" y2="50.064%" id="bmandat"><stop stop-color="#0069FF" stop-opacity=".3" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity=".2" offset="36%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1="0%" y1="50.225%" y2="50.225%" id="cmandat"><stop stop-color="#0069FF" stop-opacity=".3" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity=".2" offset="36%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g transform="translate(2 1)" fill="none" fill-rule="evenodd"><ellipse stroke="#0065FF" stroke-width="2.11" fill="#FFF" fill-rule="nonzero" cx="14.45" cy="6.878" rx="14.39" ry="6.821"></ellipse><path d="M.05 6.878v7.99c0 3.8 6.45 6.82 14.4 6.82s14.39-3.049 14.39-6.82v-7.99" stroke="#0065FF" stroke-width="2.11"></path><g stroke-width="2"><path d="M28.84.228v7.99c0 3.8-6.45 6.82-14.39 6.82S.05 11.99.05 8.219V.227c0 3.8 6.45 6.821 14.4 6.821S28.84 4.047 28.84.228z" stroke="#0069FF" fill="url(#amandat)" fill-rule="nonzero" transform="translate(0 6.65)"></path><path d="M12.44 17.66h4.02" stroke="#120078"></path></g><g stroke-width="2"><path d="M28.84.618V8.55c0 3.8-6.45 6.85-14.39 6.85S.05 12.35.05 8.55V.617c0 3.8 6.45 6.822 14.4 6.822S28.84 4.389 28.84.617z" stroke="#0069FF" fill="url(#bmandat)" fill-rule="nonzero" transform="translate(0 14.25)"></path><path d="M12.44 25.697h4.02" stroke="#120078"></path></g><g stroke-width="2"><path d="M28.84 0v7.99c0 3.8-6.45 6.82-14.39 6.82S.05 11.761.05 7.99V0c0 3.8 6.45 6.85 14.4 6.85S28.84 3.8 28.84 0z" stroke="#0069FF" fill="url(#cmandat)" fill-rule="nonzero" transform="translate(0 22.8)"></path><path d="M12.44 33.659h4.02" stroke="#120078"></path></g></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Managed Databases
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Provision a managed database in just a few clicks. We’ll handle setting up, backing up, and updating — so you can focus on building great apps.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="50%" y1="99.768%" x2="50%" y2=".498%" id="astoreblock"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity=".3" offset="28%"></stop><stop stop-color="#0069FF" stop-opacity=".05" offset="88%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#astoreblock)" fill-rule="nonzero" d="M4.225 11.825V25.55l11.735 6.777 11.735-6.777V11.825L15.96 5.05z" transform="translate(1 1)"></path><path d="M16.96 10.69s-7.12 5.22-7.12 10.55a7.12 7.12 0 0 0 14.24 0c0-5.14-7.12-10.55-7.12-10.55z" stroke="#0069FF" stroke-width="2" fill="#FFF" fill-rule="nonzero"></path><path stroke="#120078" stroke-width="2" d="M1 10.355V29.02l15.96 9.22 15.96-9.22V10.355l-15.96-9.21z"></path><path stroke="#0069FF" opacity=".3" d="M1 10.6l15.96 9.21 15.96-9.21M16.96 19.81v18.421"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Block Storage
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Attach additional SSD-based storage to your Droplets for your databases or file storage.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="0%" y1="50%" y2="50%" id="aobjstorage"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill-rule="nonzero" fill="none"><path d="M7.93 8.1c.395.02.78-.122 1.07-.39a1.43 1.43 0 0 0 .49-1.08 1.47 1.47 0 0 0-.39-1.07 1.61 1.61 0 0 0-1-.49H8a1.42 1.42 0 0 0-1.44 1.37A1.47 1.47 0 0 0 7 7.51c.18.35.536.576.93.59zM3.83 14.15a1.39 1.39 0 0 0 1.56-1.37A1.47 1.47 0 0 0 5 11.71a1.38 1.38 0 0 0-1.07-.49h-.1a1.41 1.41 0 0 0-1.46 1.37 1.43 1.43 0 0 0 .39 1.07c.28.296.663.472 1.07.49zM4 19.9a1.43 1.43 0 0 0-.39-1.07 1.39 1.39 0 0 0-1.07-.49h-.1a1.25 1.25 0 0 0-1 .39 1.23 1.23 0 0 0-.49 1c-.02.395.122.78.39 1.07.268.311.659.49 1.07.49A1.57 1.57 0 0 0 4 19.9zM4 25.46h-.07a1.27 1.27 0 0 0-1 .39 1.43 1.43 0 0 0-.49 1.08A1.47 1.47 0 0 0 2.85 28c.272.312.666.49 1.08.49.395.02.78-.122 1.07-.39a1.43 1.43 0 0 0 .49-1.1A1.52 1.52 0 0 0 4 25.46zM8.22 31.61h-.1A1.42 1.42 0 0 0 6.66 33c-.02.395.122.78.39 1.07a1.39 1.39 0 0 0 1.07.49 1.51 1.51 0 0 0 1.08-.39A1.55 1.55 0 0 0 9.29 32a2.33 2.33 0 0 0-1.07-.39zM14.27 35.51h-.1a1.25 1.25 0 0 0-1 .39 1.4 1.4 0 0 0-.46 1.1 1.43 1.43 0 0 0 .39 1.07 1.39 1.39 0 0 0 1.07.49c.395.02.78-.122 1.07-.39a1.4 1.4 0 0 0 .49-1.08 1.47 1.47 0 0 0-.39-1.09 1.57 1.57 0 0 0-1.07-.49z" fill="#120078"></path><circle fill="#120078" cx="27.73" cy="28.78" r="1.46"></circle><circle fill="#120078" cx="31.73" cy="23.22" r="1.46"></circle><circle fill="#120078" cx="31.83" cy="16.49" r="1.46"></circle><circle fill="#120078" cx="27.73" cy="10.73" r="1.46"></circle><path d="M14.07 4a1.45 1.45 0 0 0 1.56-1.37 1.43 1.43 0 0 0-1.36-1.56h-.1a1.25 1.25 0 0 0-1 .39 1.2 1.2 0 0 0-.49 1 1.43 1.43 0 0 0 .39 1.07c.236.311.61.487 1 .47z" fill="#120078"></path><path d="M20.8 32.1v-2.54a9.86 9.86 0 0 1 0-19.71V7.32c-6.65.267-11.902 5.735-11.902 12.39S14.15 31.833 20.8 32.1zM21.49 0v2.54c9.4.226 16.904 7.912 16.904 17.315 0 9.403-7.503 17.09-16.904 17.315v2.54c10.792-.242 19.414-9.06 19.414-19.855S32.282.242 21.49 0z" fill="#0069FF"></path><circle fill="url(#aobjstorage)" cx="21" cy="19.9" r="11.41"></circle></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Object Storage
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Store and retrieve any amount of data, including audio, video, images, and log files using DigitalOcean Spaces.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="50%" y1="99.791%" x2="50%" y2=".47%" id="ashadowsnap"><stop stop-color="#0069FF" stop-opacity=".3" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M39.1 38.5H2.2a.9.9 0 0 1-.9-.9V1.1a.9.9 0 0 1 .9-.9h36.9a.9.9 0 0 1 .9.9v36.5a.9.9 0 0 1-.9.9z" fill="url(#ashadowsnap)" fill-rule="nonzero" transform="translate(0 1)"></path><path d="M20.4 7.4s-11 6.4-11 14.9a11.19 11.19 0 0 0 11 11.4 11.19 11.19 0 0 0 11-11.4c0-8.3-11-14.9-11-14.9z" stroke="#0069FF" stroke-width="2" fill="#FFF" fill-rule="nonzero"></path><g stroke="#120078" stroke-width="2"><path d="M39.7 9.8V2.6A1.56 1.56 0 0 0 38.2 1h-6.9M9.5 1H2.6A1.58 1.58 0 0 0 1 2.6v7.1M1 31.2v7.1A1.61 1.61 0 0 0 2.6 40h6.9M31.2 40h6.9a1.58 1.58 0 0 0 1.6-1.6v-7.1"></path></g><g stroke="#120078" stroke-width="2"><path d="M20.4 17.3v10.3M15.4 22.5h9.9"></path></g></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Backups & Snapshots
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Capture backups and snapshots of your Droplets to store server images or automatically scale your system.
              </p>
            </div>
          </div>
        </div>
        <div className="sales-pitch-one__detail-interactive-container">
          <input
            className="sales-pitch-one__detail-radio"
            type="radio"
            name="services"
            id="secure"
          />
          <label htmlFor="secure" className="sales-pitch-one__detail-label">secure</label>
          <div className="sales-pitch-one__pitch-details-container">
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="49.953%" y1="97.607%" x2="49.953%" y2="-29.302%" id="afirew"><stop stop-color="#0069FF" stop-opacity=".6" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1="49.648%" y1="99.559%" x2="49.648%" y2="4.357%" id="bfirew"><stop stop-color="#0069FF" stop-opacity=".6" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M32.8 1c-.7-.6-1.7-1-2.7-1h-26C1.9 0 0 1.9 0 4.2v8.5c0 1.1.4 2.1 1.1 2.8l3.4 3.8L36 3.6 32.8 1z" fill="url(#afirew)" fill-rule="nonzero" transform="translate(1 21)"></path><g stroke="#120078" stroke-width="2"><path d="M5.6 38.4V26.9c0-.9 1-1.7 2.1-1.7h27.6c1.2 0 2.1.8 2.1 1.7v11.5c0 .9-1 1.7-2.1 1.7H7.7c-1.1 0-2.1-.7-2.1-1.7z" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M5.6 32.7h31.9M21.3 25.1v8M13.7 32.1v8.1M29.2 32.1v8.1"></path></g><path d="M20.4 1.2s-7.1 5.2-7.1 10.5c0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1 0-5-7.1-10.5-7.1-10.5z" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M19.4.9s-6.6 4.9-6.6 9.8c0 3.7 3 6.6 6.6 6.6 3.7 0 6.6-3 6.6-6.6C26 5.9 19.4.9 19.4.9z" fill="url(#bfirew)" fill-rule="nonzero" transform="translate(1 1)"></path><path d="M20.4 1.2s-7.1 5.2-7.1 10.5c0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1 0-5-7.1-10.5-7.1-10.5z" stroke="#0069FF" stroke-width="2"></path><path d="M20.4 10.8s-2.6 1.9-2.6 3.9c0 1.5 1.2 2.6 2.6 2.6 1.5 0 2.6-1.2 2.6-2.6 0-1.9-2.6-3.9-2.6-3.9z" stroke="#120078" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Cloud Firewalls
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Easily secure your infrastructure and instantly define what services are visible on all of your Droplets.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="83.984%" y1="84.018%" x2="15.777%" y2="15.811%" id="ateamm"><stop stop-color="#0069FF" stop-opacity=".3" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1="49.557%" y1="1.251%" x2="49.557%" y2="92.724%" id="bteamm"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient><linearGradient x1="49.895%" y1="-.254%" x2="49.895%" y2="98.066%" id="cteamm"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g transform="translate(0 1.5)" fill="none" fill-rule="evenodd"><circle fill="url(#ateamm)" fill-rule="nonzero" cx="22.163" cy="20.166" r="10.559"></circle><path d="M31.39 29.678c-3.614 0-8.56 2.283-8.466 8.561l17.122-.095c-.095-6.183-5.041-8.466-8.656-8.466z" fill="url(#bteamm)" fill-rule="nonzero"></path><path d="M9.417 7.8c-3.615 0-8.56 2.283-8.466 8.561v3.615l17.122-.286v-3.329C17.978 10.083 13.127 7.8 9.417 7.8z" fill="url(#cteamm)" fill-rule="nonzero"></path><g opacity=".3" stroke="#0069FF" stroke-width="2"><path d="M6.088 20.737c.19 7.61 5.707 13.887 12.936 15.41M38.239 21.307v-.95c0-8.847-7.23-16.077-16.076-16.077-1.236 0-2.473.096-3.614.381"></path></g><path d="M39.951 38.239c0-6.278-4.946-8.561-8.56-8.466-3.615 0-8.562 2.283-8.467 8.561" stroke="#0069FF" stroke-width="2"></path><circle stroke="#120078" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero" cx="31.39" cy="26.254" r="4.376"></circle><path d="M18.073 16.266c0-6.278-4.946-8.561-8.56-8.466-3.615.095-8.562 2.283-8.467 8.561" stroke="#0069FF" stroke-width="2"></path><circle stroke="#120078" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero" cx="9.417" cy="4.376" r="4.376"></circle><path d="M22.163 17.312v5.612M19.405 20.166h5.612" stroke="#120078" stroke-width="2"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Team management
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Invite team members to collaborate, ensure security with two-factor auth, and control your resources with centralized billing.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="50%" y1="-.12%" x2="50%" y2="96.486%" id="aprivan"><stop stop-color="#0069FF" stop-opacity=".6" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M39.9 31.9c1.1-2.8-6.2-9.7-17.5-15.3-11.3-5.6-20.2-7.9-21.3-5" stroke="#120078" stroke-width="2"></path><path d="M1.1 31.9C0 29.1 7.3 22.2 18.6 16.6c11.3-5.6 20.2-7.9 21.3-5" stroke="#120078" stroke-width="2"></path><path d="M20.5 35.8c-7.5 0-13.8-6.1-13.8-13.5 0-11.4 13.8-19.2 13.8-19.2S34.3 11 34.3 22.3c0 7.5-6.3 13.5-13.8 13.5z" stroke="#0069FF" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M20.5 28.6c-5.2 0-9.6-4.2-9.6-9.4 0-7.9 9.6-13.5 9.6-13.5s9.6 5.7 9.6 13.5c0 5.2-4.4 9.4-9.6 9.4z" fill="url(#aprivan)" fill-rule="nonzero" transform="translate(0 3)"></path><path d="M39.9 11.6c1.1 2.8-6.2 9.7-17.5 15.3-11.3 5.6-20.2 7.9-21.3 5" stroke="#120078" stroke-width="2"></path><path d="M1.1 11.6C0 14.4 7.3 21.3 18.6 26.9c11.3 5.6 20.2 7.9 21.3 5" stroke="#120078" stroke-width="2"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Private Networking
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Enable communication between Droplets in the same datacenter.
              </p>
            </div>
          </div>
        </div>
        <div className="sales-pitch-one__detail-interactive-container">
          <input
            className="sales-pitch-one__detail-radio"
            type="radio"
            name="services"
            id="monitor"
          />
          <label htmlFor="monitor" className="sales-pitch-one__detail-label">monitor</label>
          <div className="sales-pitch-one__pitch-details-container">
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="49.931%" y1=".209%" x2="49.931%" y2="96.798%" id="anatively"><stop stop-color="#0069FF" stop-opacity=".6" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M13.857 31.971C6.905 31.971 1 26.352 1 19.4 1 8.733 13.857 1.59 13.857 1.59S26.714 8.924 26.714 19.4c0 6.952-5.904 12.571-12.857 12.571z" stroke="#120078" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M38.048 18.257h-22.19c-1.048 0-2 .857-2 2v17.238c0 1.048.856 2 2 2h22.285c1.047 0 2-.857 2-2V20.257c-.095-1.047-.953-2-2.095-2z" stroke="#0069FF" stroke-width="2" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M12.857 26.571C8 26.571 4 22.667 4 17.81c0-7.334 8.857-12.572 8.857-12.572s8.857 5.333 8.857 12.572c0 4.857-4.095 8.761-8.857 8.761z" fill="url(#anatively)" fill-rule="nonzero" transform="translate(1 1.4)"></path><path stroke="#0069FF" stroke-width="2" opacity=".3" d="M14.048 33.495h8.095l5.524-5.524 2.952 2.953h8.667"></path><path d="M24.238 2.352h.952c5.905 0 10.762 4.762 10.762 10.762" stroke="#B0D1FF" stroke-width="2"></path><path stroke="#B0D1FF" stroke-width="2" d="M38.905 9.114l-2.667 4.476-4.38-2.761"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Natively integrated
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Monitor system-level metrics in the same place you manage your infrastructure – at no additional cost.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="10.174%" y1="101.226%" x2="85.901%" y2="32.035%" id="arealtime"><stop stop-color="#0069FF" stop-opacity=".3" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M29.107 26.73H26.92v-9.608c0-6.183-4.852-11.51-11.035-11.7-6.278 0-11.51 5.041-11.51 11.32v9.987H2.284C1.046 26.73 0 27.776 0 29.012v1.332c0 1.236 1.046 2.283 2.283 2.283h26.92c1.236 0 2.282-1.047 2.282-2.283v-1.332c-.095-1.236-1.141-2.283-2.378-2.283z" fill="url(#arealtime)" fill-rule="nonzero" transform="translate(4.75 1)"></path><g opacity=".4" fill="#0069FF" fill-rule="nonzero"><path d="M32.05 1.666L30.433 1 28.91 4.615c.57.285 1.046.665 1.522 1.046l1.617-3.995zM40.135 14.412l-4.375-.19c.095.57.285 1.141.285 1.807l3.995.095.095-1.712zM38.138 7.659l-.951-1.522-3.9 2.568c.38.475.665.951.95 1.522l3.9-2.568z"></path></g><g stroke-width="2"><path d="M17.591 6.802V4.805c0-1.522 1.237-2.854 2.854-2.854 1.522 0 2.854 1.237 2.854 2.854v1.997M24.82 33.722v1.046c0 2.378-1.997 4.376-4.375 4.376s-4.375-1.998-4.375-4.376v-1.046" stroke="#0069FF"></path><path d="M25.201 27.73H6.843a2.111 2.111 0 0 0-2.093 2.092v1.617c0 1.141.951 2.093 2.093 2.093h27.11a2.111 2.111 0 0 0 2.092-2.093v-1.617a2.111 2.111 0 0 0-2.093-2.093H31.765v-9.988c0-6.278-5.042-11.319-11.32-11.319a11.286 11.286 0 0 0-11.32 11.32V28.11" stroke="#120078"></path></g></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Real-time alerts
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                Receive alerts via Slack or email whenever a metric crosses your specified threshold and critical issues arise in your infrastructure.
              </p>
            </div>
            <div className="sales-pitch-one__pitch-detail-container">
              <svg className="sales-pitch-one__pitch-detail-icon www-Icon www-Icon--xlarge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" aria-hidden="true"><defs><linearGradient x1="44.396%" y1="25.78%" x2="59.956%" y2="85.985%" id="aresourcemetrics"><stop stop-color="#0069FF" stop-opacity=".4" offset="0%"></stop><stop stop-color="#0069FF" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M34.9 2.23H4.3A3.33 3.33 0 0 0 1 5.53v28.1a3.33 3.33 0 0 0 3.3 3.3h30.6a3.33 3.33 0 0 0 3.3-3.3V5.53a3.33 3.33 0 0 0-3.3-3.3z" stroke="#0069FF" stroke-width="2"></path><path d="M38.2 25.23H1M38.2 13.23H1" stroke="#0069FF" stroke-width="2" opacity=".3"></path><path d="M37.4 37V2.43l-9.8 14.4a2.66 2.66 0 0 1-3.8.7l-3.9-2.7a2.78 2.78 0 0 0-3.7.5L.8 33.43a2.07 2.07 0 0 0 1.6 3.4l35 .17z" fill="url(#aresourcemetrics)" fill-rule="nonzero" transform="translate(1)"></path><path d="M11 22.63L16.7 16a3.49 3.49 0 0 1 4.8-.7l2.6 1.8a3.66 3.66 0 0 0 5-.9l7.2-10.7" stroke="#120078" stroke-width="2"></path><path d="M35.3 3.93A2.43 2.43 0 0 1 37.2 1 2.53 2.53 0 0 1 40 3a2.4 2.4 0 0 1-2 2.8 2.35 2.35 0 0 1-2.7-1.87zM6.8 25.13a2.4 2.4 0 0 1 1.9-2.8 2.46 2.46 0 0 1 2.8 1.9A2.33 2.33 0 0 1 9.6 27a2.46 2.46 0 0 1-2.8-1.87z" stroke="#120078" stroke-width="2" fill="#FFF" fill-rule="nonzero"></path></g></svg>
              <h4 className="sales-pitch-one__pitch-detail-title">
                Resource metrics
              </h4>
              <p className="sales-pitch-one__pitch-detail-text">
                View summary stats and time series graphs of resource usage for your Kubernetes cluster, database, or individual Droplet nodes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ux-example">
      <h1 className="ux-example__title">Designed for developers</h1>
      <p className="ux-example__text">
        Build more and spend less time managing your infrastructure with our
        easy-to-use control panel and API.
      </p>
      <img
        className="ux-example__img"
        src="./assets/screenshot-create-kubernetes-cluster.jpg"
        alt="Digital Ocean's services"
      />
    </section>

    <section className="sales-pitch-two">
      <h1 className="sales-pitch-two__title">Built for business</h1>
      <ul className="sales-pitch-two__pitches-container">
        <li className="sales-pitch-two__pitch-container">
          <img className="sales-pitch-two__pitch-logo" src="./assets/svg49.svg" alt="" />
          <h5 className="sales-pitch-two__pitch-title">Reliable platform</h5>
          <p className="sales-pitch-two__pitch-text">
            More than 100,000 developer teams worldwide trust DigitalOcean to
            support their business with a 99.99% uptime SLA for all services.
          </p>
          <a className="sales-pitch-two__pitch-cta" href="#">Security</a>
        </li>
        <li className="sales-pitch-two__pitch-container">
          <img className="sales-pitch-two__pitch-logo" src="./assets/svg11.svg" alt="" />
          <h5 className="sales-pitch-two__pitch-title">Predictable pricing</h5>
          <p className="sales-pitch-two__pitch-text">
            Leave complex pricing structures behind. Always know what you’ll pay
            per month with a flat, industry-leading pricing structure.
          </p>
          <a className="sales-pitch-two__pitch-cta" href="#">Pricing</a>
        </li>
        <li className="sales-pitch-two__pitch-container">
          <img className="sales-pitch-two__pitch-logo" src="./assets/svg51.svg" alt="" />
          <h5 className="sales-pitch-two__pitch-title">World-class service</h5>
          <p className="sales-pitch-two__pitch-text">
            Free around-the-clock technical support for all customers, with
            additional benefits for premium support subscribers. You’ll feel the
            love.
          </p>
          <a className="sales-pitch-two__pitch-cta" href="#">Support</a>
        </li>
        <li className="sales-pitch-two__pitch-container">
          <img className="sales-pitch-two__pitch-logo" src="./assets/svg18.svg" alt="" />
          <h5 className="sales-pitch-two__pitch-title">Security and compliance</h5>
          <p className="sales-pitch-two__pitch-text">
            Keep your data protected. Our platform is certified on multiple
            international standards, including SOC 1 Type II, SOC 2 Type II,
            ISO/IEC 27001, and PCI-DSS.
          </p>
          <a className="sales-pitch-two__pitch-cta" href="#">Security</a>
        </li>
      </ul>
    </section>

    <section className="data-centers">
      <h1 className="data-centers__title">
        Service your customers around the world from 12 data centers.
      </h1>
      <div className="data-centers__table-container">
        <table className="data-centers__table">
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">AMS2</td>
            <td className="data-centers__city">Amsterdam, Netherlands</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">AMS3</td>
            <td className="data-centers__city">Amsterdam, Netherlands</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">BLR1</td>
            <td className="data-centers__city">Bangalore, India</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">FRA1</td>
            <td className="data-centers__city">Frankfurt, Germany</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">LON1</td>
            <td className="data-centers__city">London, UK</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">NYC1</td>
            <td className="data-centers__city">New York, USA</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
        </table>

        <table className="data-centers__table">
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">NYC2</td>
            <td className="data-centers__city">New York, USA</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">NYC3</td>
            <td className="data-centers__city">New York, USA</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">SFO1</td>
            <td className="data-centers__city">San Francisco, USA</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">SFO2</td>
            <td className="data-centers__city">San Francisco, USA</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">SGP1</td>
            <td className="data-centers__city">Singapore</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
          <tr className="data-centers__table-row">
            <td className="data-centers__server-code">TOR1</td>
            <td className="data-centers__city">Toronto, Canada</td>
            <td className="data-centers__cta">
              <a className="data-centers__cta data-centers__cta--link" href="#">Test speed ></a>
            </td>
          </tr>
        </table>
      </div>
    </section>

    <section className="quotes">
      <h1 className="quotes__title">Development teams love DigitalOcean.</h1>
      <div className="quotes__quotes-container">
        <a className="quotes__previous-quote" href="#"><i className="quotes__previous-quote--text"></i></a>
        <div className="quotes__quote-main-container">
          <img className="quotes__affiliation-logo" src="./assets/rockerbox-logo.png" alt="rockerbox" />
          <p className="quotes__direct-quote">
            We have been able to make scaling the technical infrastructure of our
            business cost effective and efficient.
          </p>
          <div className="quotes__quoted-by-container">
            <p className="quotes__quoted-by-name">Jamie Druce</p>
            <p className="quotes__quoted-by-professional-title">
              Senior Web Developer
            </p>
          </div>
          <a className="quotes__cta" href="#">Read story ></a>
        </div>
        <a className="quotes__next-quote" href="#"><i className="quotes__next-quote--text"></i></a>
      </div>
    </section>

    <section className="cta">
      <h1 className="cta__title">Get started now.</h1>
      <button className="cta__button">Create your account</button>
    </section>

    <footer className="footer">
      <div className="footer__main">
        <img className="footer__logo" src="./assets/svg0.svg" alt="Digital Ocean Logo" />
        <p className="footer__copyright">
          &copy; 2019 DigitalOcean, LLC. All rights reserved.
        </p>
        <div className="footer__social-media-container">
          <div className="footer__social-media-icon-container">
            <a className="footer__social-media-icon-link" href="#">
              <svg className="footer__social-media-icon www-Icon www-Icon--large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitter</title><path d="M7.547 21.5c9.056 0 14.0092-7.5028 14.0092-14.0092 0-.2131 0-.4253-.0144-.6365a10.0178 10.0178 0 0 0 2.4565-2.5486 9.8278 9.8278 0 0 1-2.828.7747A4.9408 4.9408 0 0 0 23.335 2.357a9.8671 9.8671 0 0 1-3.1265 1.195c-1.5263-1.6228-3.9514-2.02-5.9156-.9688-1.9641 1.0512-2.9789 3.2893-2.4752 5.4594A13.9785 13.9785 0 0 1 1.6703 2.8985C.3635 5.1482 1.031 8.0263 3.1946 9.471A4.887 4.887 0 0 1 .96 8.8548v.0624c.0007 2.3438 1.6528 4.3625 3.9501 4.8266a4.9158 4.9158 0 0 1-2.2232.0844c.645 2.0057 2.4935 3.3797 4.6 3.4193a9.8796 9.8796 0 0 1-6.1147 2.1119A10.0226 10.0226 0 0 1 0 19.2884a13.9392 13.9392 0 0 0 7.547 2.2078"></path></svg>
            </a>
          </div>
          <div className="footer__social-media-icon-container">
            <a className="footer__social-media-icon-link" href="#">
              <svg className="footer__social-media-icon www-Icon www-Icon--large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Facebook</title><path fill-rule="evenodd" d="M22.6753 0H1.3245C.5929 0 0 .593 0 1.3246v21.3508C0 23.4068.593 24 1.3245 24H12.819v-9.294H9.6913v-3.6221h3.1278V8.4128c0-3.1 1.8934-4.7879 4.6585-4.7879 1.3248 0 2.4631.0985 2.7949.1428v3.2395l-1.918.001c-1.504 0-1.795.7144-1.795 1.7631v2.3126h3.5866l-.4668 3.622h-3.1198V24h6.1158C23.4068 24 24 23.4068 24 22.6754V1.3246C24 .5929 23.4068 0 22.6753 0"></path></svg>
            </a>
          </div>
          <div className="footer__social-media-icon-container">
            <a className="footer__social-media-icon-link" href="#">
              <svg className="footer__social-media-icon www-Icon www-Icon--large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Instagram</title><g fill-rule="evenodd"><path d="M11.9962.0076c-3.258 0-3.6665.0138-4.946.0722-1.2769.0582-2.149.261-2.912.5576-.7888.3065-1.4578.7167-2.1248 1.3836-.6669.667-1.077 1.336-1.3836 2.1248-.2966.763-.4994 1.6351-.5576 2.912C.0138 8.3373 0 8.7458 0 12.0038s.0138 3.6665.0722 4.946c.0582 1.2769.261 2.149.5576 2.912.3065.7888.7167 1.4578 1.3836 2.1248.667.6669 1.336 1.077 2.1248 1.3836.763.2966 1.6351.4994 2.912.5576 1.2795.0584 1.688.0722 4.946.0722s3.6665-.0138 4.946-.0722c1.2769-.0582 2.149-.261 2.912-.5576.7888-.3065 1.4578-.7167 2.1248-1.3836.6669-.667 1.0771-1.336 1.3837-2.1248.2965-.763.4993-1.6351.5575-2.912.0584-1.2795.0722-1.688.0722-4.946s-.0138-3.6665-.0722-4.946c-.0582-1.2769-.261-2.149-.5575-2.912-.3066-.7888-.7168-1.4578-1.3837-2.1248-.667-.6669-1.336-1.0771-2.1248-1.3836-.763-.2966-1.6351-.4994-2.912-.5576-1.2795-.0584-1.688-.0722-4.946-.0722zm0 2.1614c3.2031 0 3.5826.0123 4.8475.07 1.1696.0533 1.8048.2488 2.2275.413.56.2177.9596.4776 1.3794.8974.4198.4198.6797.8194.8974 1.3794.1642.4227.3597 1.0579.413 2.2275.0577 1.265.07 1.6444.07 4.8475s-.0123 3.5825-.07 4.8475c-.0533 1.1696-.2488 1.8048-.413 2.2275-.2177.56-.4776.9596-.8974 1.3793-.4198.4199-.8194.6798-1.3794.8974-.4227.1643-1.0579.3597-2.2275.413-1.2647.0578-1.6441.07-4.8475.07-3.2033 0-3.5827-.0122-4.8475-.07-1.1696-.0533-1.8048-.2487-2.2275-.413-.56-.2176-.9596-.4775-1.3793-.8974-.4198-.4197-.6798-.8193-.8974-1.3793-.1643-.4227-.3597-1.0579-.413-2.2275-.0578-1.265-.07-1.6444-.07-4.8475s.0122-3.5826.07-4.8475c.0533-1.1696.2487-1.8048.413-2.2275.2176-.56.4775-.9596.8974-1.3794.4197-.4198.8193-.6797 1.3793-.8974.4227-.1642 1.0579-.3597 2.2275-.413 1.265-.0577 1.6444-.07 4.8475-.07z"></path><path d="M11.9962 16.0025c-2.2084 0-3.9987-1.7903-3.9987-3.9987 0-2.2085 1.7903-3.9988 3.9987-3.9988 2.2085 0 3.9988 1.7903 3.9988 3.9988 0 2.2084-1.7903 3.9987-3.9988 3.9987zm0-10.159c-3.4022 0-6.1602 2.758-6.1602 6.1603 0 3.4022 2.758 6.1602 6.1602 6.1602 3.4022 0 6.1602-2.758 6.1602-6.1602 0-3.4022-2.758-6.1602-6.1602-6.1602zm7.8432-.2433c0 .795-.6445 1.4395-1.4396 1.4395-.795 0-1.4395-.6445-1.4395-1.4395s.6445-1.4396 1.4395-1.4396 1.4396.6445 1.4396 1.4396"></path></g></svg>
            </a>
          </div>
          <div className="footer__social-media-icon-container">
            <a className="footer__social-media-icon-link" href="#">
              <svg className="footer__social-media-icon www-Icon www-Icon--large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.3885 6.6162c.5115 1.8687.4918 5.7635.4918 5.7635s0 3.8752-.4918 5.744c-.2754 1.0228-1.0819 1.8293-2.1047 2.1047-1.8688.4918-9.3436.4918-9.3436.4918s-7.4553 0-9.3437-.5115C1.5737 19.9333.7672 19.1268.4918 18.104 0 16.255 0 12.3601 0 12.3601s0-3.8752.4918-5.7439c.2754-1.0229 1.1015-1.849 2.1047-2.1244C4.4653 4 11.9402 4 11.9402 4s7.4748 0 9.3436.5114c1.0228.2754 1.8293 1.082 2.1047 2.1048zM9.56 15.9402l6.216-3.5801L9.56 8.78v7.1602z"></path></svg>
            </a>
          </div>
          <div className="footer__social-media-icon-container">
            <a className="footer__social-media-icon-link" href="#">
              <svg className="footer__social-media-icon www-Icon www-Icon--large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>LinkedIn</title><path fill-rule="evenodd" d="M22.2236 0c.9786 0 1.7777.7751 1.7777 1.7293v20.5391c0 .9556-.799 1.7316-1.7777 1.7316H1.7716C.7938 24 0 23.224 0 22.2684V1.7294C0 .775.7938 0 1.7716 0h20.452zm-1.773 20.4511V14.169c0-3.0849-.6653-5.4565-4.2675-5.4565-1.7315 0-2.8933.9498-3.3684 1.8503h-.0485v-1.565h-3.415v11.4534h3.5586v-5.6653c0-1.4947.2826-2.9414 2.135-2.9414 1.824 0 1.8503 1.7085 1.8503 3.037v5.5697h3.5556zM5.3383 7.432c1.1378 0 2.0627-.9249 2.0627-2.0644 0-1.1383-.9249-2.0636-2.0627-2.0636-1.1413 0-2.0635.9253-2.0635 2.0636 0 1.1395.9222 2.0644 2.0635 2.0644zM3.5573 20.4507h3.5614V8.9977H3.5573v11.453z"></path></svg>
            </a>
          </div>
          <div className="footer__social-media-icon-container">
            <a className="footer__social-media-icon-link" href="#">
              <svg className="footer__social-media-icon www-Icon www-Icon--large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Glassdoor</title><path fill-rule="evenodd" d="M16.7143 20.5715H3C3 22.465 4.535 24 6.4286 24h10.2857c1.8935 0 3.4286-1.535 3.4286-3.4285V6.4923a.125.125 0 0 0-.125-.1249h-3.1787a.125.125 0 0 0-.125.1249v14.0792zm0-20.5715c1.8935 0 3.4286 1.535 3.4286 3.4286H6.4286v14.0792a.125.125 0 0 1-.1249.125H3.125A.125.125 0 0 1 3 17.5077V3.4286C3 1.5351 4.535 0 6.4286 0h10.2857z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__site-map">
        <nav className="footer__nav">
          <h4 className="footer__nav-title">Company</h4>
          <ul className="footer__links-container">
            <li className="footer__link">
              <a className="footer__link" href="#">About</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Leadership</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Blog</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Careers</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Partners</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Referral Program</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Press</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Legal & Security</a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <h4 className="footer__nav-title">Products</h4>
          <ul className="footer__links-container">
            <li className="footer__link">
              <a className="footer__link" href="#">Products Overview</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Droplets</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Kubernetes</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Managed Databases</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Spaces</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Marketplace</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Load Balancers</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Block Storage</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Tools & Integrations</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">API</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Pricing</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Documentation</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Release Notes</a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <h4 className="footer__nav-title">Community</h4>
          <ul className="footer__links-container">
            <li className="footer__link">
              <a className="footer__link" href="#">Tutorials</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Meetups</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Q&A</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Careers</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Write for Donations</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Droplets for Demos</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Hatch Startup Program</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Shop Swag</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Research Program</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Current Research</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Open Source</a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <h4 className="footer__nav-title">Contact</h4>
          <ul className="footer__links-container">
            <li className="footer__link">
              <a className="footer__link" href="#">Support</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Sales</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">Report Abuse</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="#">System Status</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </React.Fragment>
)

export default DigitalOceanReplication