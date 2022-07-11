module.exports = {
  siteMetadata: {
    title: `Holding Site`,
    siteUrl: `https://www.yourdomain.tld`
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
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Quicksand', 'Open Sans']
          }
        }
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://www.example.com',
          sitemap: 'https://www.example.com/sitemap.xml',
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
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: "YOUR_GOOGLE_TAGMANAGER_ID",

          // Include GTM in development.
          //
          // Defaults to false meaning GTM will only be loaded in production.
          includeInDevelopment: false,

          // datalayer to be set before GTM is loaded
          // should be an object or a function that is executed in the browser
          //
          // Defaults to null
          defaultDataLayer: { platform: "gatsby" },

          // Specify optional GTM environment details.
          gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
          gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
          dataLayerName: "YOUR_DATA_LAYER_NAME",

          // Name of the event that is triggered
          // on every Gatsby route change.
          //
          // Defaults to gatsby-route-change
          routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
          // Defaults to false
          enableWebVitalsTracking: true,
          // Defaults to https://www.googletagmanager.com
          selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    ]
};