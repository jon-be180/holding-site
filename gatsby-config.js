module.exports = {
  siteMetadata: {
    title: `Holding Site`,
    siteUrl: `https://be180.co.uk`
  },
  plugins:
    [
      "gatsby-plugin-sass",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          "icon": "src/images/icon.png"
        }
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Quicksand`
          ],
          display: 'swap'
        }
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://be180.co.uk',
          sitemap: 'https://be180.co.uk/sitemap/sitemap-index.xml',
          policy: [{ userAgent: '*', allow: '/' }]
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "pages",
          "path": "./src/pages/"
        },
        __key: "pages"
      },
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            formats: [`auto`, `webp`],
            placeholder: `dominantColor`,
            quality: 50,
            breakpoints: [750, 1080, 1366, 1920],
            backgroundColor: `transparent`,
            tracedSVGOptions: {},
            blurredOptions: {},
            jpgOptions: {},
            pngOptions: {},
            webpOptions: {},
            avifOptions: {},
          },
        },
      },
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `GatsbyJS`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
          icon: `src/images/icon.png`, //todo reference remotely from assets
        },
      },
    ]
};