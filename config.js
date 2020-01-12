const URLS = {
  github: 'https://github.com/bkong88',
  linkedin: 'https://www.linkedin.com/in/benardkong/',
  email: 'mailto:benardkong@hotmail.com',
}

module.exports = {
  siteTitle: 'Benard Kong', // <title>
  manifestName: 'Prologue',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-prologue/`, // This path is subpath of your hosting https://domain/portfolio
  authorSurname: 'Kong',
  authorGivenNames: 'Benard',
  heading: 'Full Stack Developer',
  urls: { ...URLS },
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: URLS.github,
      target: '_blank',
    },
    {
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: URLS.linkedin,
      target: '_blank',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: URLS.email,
      target: '',
    },
  ],
}
