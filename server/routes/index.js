const express = require('express')
const router = express.Router()

const secrets = require('../config/secrets.json')
const sgMail = require('@sendgrid/mail')
const xss = require('xss')
sgMail.setApiKey(secrets.sg)

/**
 * Health checkpoint
 */
router.get('/health', (req, res) => {
  res.send(200)
})

/**
 * Email message
 */
router.post('/namaste', (req, res) => {
  let { from, message, budget } = req.body.rfq
  message = xss(message)
  sgMail.send({
    to: 'mail@namanyayg.com',
    from,
    subject: `[W] [N]`,
    text: `${message}\n\nBudget: ${budget}\n\nFrom: ${from}`,
    html: `${message}<br><br>Budget: ${budget}<br><br>From: ${from}`
  })
  res.send(200)
})

module.exports = router;
