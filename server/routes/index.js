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
  let { from, subject, message, budget } = req.body.rfq
  message = xss(message)
  sgMail.send({
    to: 'hi@nmn.gl',
    from,
    subject: `[W] [N]`,
    text: `${message}\n\nBudget: ${budget}`,
    html: `${message}<br><br>Budget: ${budget}`
  })
  res.send(200)
})

module.exports = router;
