module.exports = {
  pathPrefix: "/frontend",
  siteMetadata: {
    title: `RookTKO`,
    siteUrl: `https://www.rooktko.com`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/media/images/`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/media/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/layouts/Posts.js"),
          default: require.resolve("./src/components/layouts/DefaultLayout.js"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`, //Removes all mdx files from routes
      },
    }
  ]
};