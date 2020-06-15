import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { Provider } from 'react-redux';
import {Helmet} from 'react-helmet';
const fetch = require('node-fetch').default;

import configureStore from './configure-store';
import {localizeConfig} from "./main";
import {removeReactHelmetAttr} from "./utils/helpers";
import {environment} from "./environments";
import {POSTS_STATE} from "./reducers/blog";
import {getCurrentPostUrl} from "./actions/blog";


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {

    const preloadedState = {
      blog: POSTS_STATE
    };

    const postSlug = req.url.includes('blog') && req.url.replace(/\/blog\//, '');


    if (postSlug) {

      const res = await fetch(getCurrentPostUrl(postSlug));
      const data = await res.json();

      preloadedState.blog.currentPost = data[0];
    }


    const store = configureStore(preloadedState);

    const context = {};
    const markup = renderToString(
      <Provider store={store} initialize={localizeConfig}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const helmet = Helmet.renderStatic();
    const title = removeReactHelmetAttr(helmet.title.toString());
    const meta = removeReactHelmetAttr(helmet.meta.toString());

    const finalState = store.getState();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
        <html lang="en">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          ${title}
          ${meta}
          <link href="https://cardpay.bamboohr.com/css/jobs-embed.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,900&amp;subset=cyrillic" rel="stylesheet">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
          ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
        </head>
        <body>
          <div id="root">${markup}</div>
          <div id="mobile-menu"></div>
          <div id="message-overlay-container"></div>
          <script>
            window.__PRELOADED_STATE__ = ${serialize(finalState)}
          </script>
          
          <script type="text/javascript"> _linkedin_partner_id = "1551554"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); 
            </script>
    
          <script type="text/javascript"> (function()
            {var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);}
            )(); 
          </script> 

          <noscript> <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1551554&fmt=gif" /> </noscript>
        </body>
        </html>`
      );
    }
  });

export default server;
