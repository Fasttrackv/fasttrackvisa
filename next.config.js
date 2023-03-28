/** @type {import('next').NextConfig} */
// {`${API}/user/photo/${blog.postedBy.username}`}
module.exports = ({
    // reactStrictMode: true,
//   images: {
//     domains: ['img/'],
//     source: '/',
//   },
    swcMinify: true,
//     async redirects() {
//     return [       
//         {
//             source: '/',
//             destination: '/en-in',
//             permanent: true,
//         } 
//     ]
//   },
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    },
    env: {
      RAPIDAPI_KEY: 'process.env.RAPIDAPI_KEY',
    },
})

// const withCss = require('@zeit/next-css')
// const withPurgeCss = require('next-purgecss')

// module.exports = withCss(withPurgeCss())



// const withCss = require('@zeit/next-css')
// const withPurgeCss = require('next-purgecss')
 
// module.exports = withCss(withPurgeCss(
//     {
//         purgeCssPaths: [
//             'pages/**/*',
//             'components/**/*',
//             'other-components/**/*' // also scan other-components folder
//           ]
//     }
// ))
// const withCss = require("@zeit/next-css");
// const withPurgeCss = require("next-purgecss");

// module.exports = withCss(
//     withPurgeCss(
//         {
//         purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
//         purgeCssPaths: [
//             "pages/**/*",
//             "components/**/*",
//             "other-components/**/*", // also scan other-components folder
//           ],
//     }));
// const nextConfig = {
//     reactStrictMode: true,
//   }
  
  //module.exports = nextConfig

