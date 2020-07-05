const express = require('express')
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Document from '../components/Document'
import App from '../components/App'

const router = express.Router();

router.get("*", function (req, res, next) {
  console.log('server req:', req.url)
  const appString = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
    >
      <App />
    </StaticRouter>)

  const html = ReactDOMServer.renderToStaticMarkup(<Document>
    {appString}
  </Document>)
  console.log('html', html)

  res.status(200);
  res.send(html);
});

module.exports = router