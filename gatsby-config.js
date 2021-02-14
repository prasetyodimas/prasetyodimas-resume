module.exports = {
  siteMetadata: {
    description: "Personal page or resume of Dimas Prasetyo",
    locale: "en",
    title: "Dimas Prasetyo",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
