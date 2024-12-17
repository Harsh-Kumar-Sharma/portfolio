const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');

const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text, html) => {
  const msg = { from: config.email.from, to, subject, text, html };
  await transport.sendMail(msg);
};

const sendEnquiryEmail = async ({ name, mobileNo, email, message }) => {
  try {

    const textContent = `
    Dear Harsh Kumar Sharma,

    You have received a new enquiry from the website.

    Name: ${name}
    Mobile No: ${mobileNo ? mobileNo : 'Not available'}
    Email: ${email ? email : 'Not available'}
    Message: ${message ? message : 'Not available'}

    Note: This is an auto generated email by the website. Do not reply to this email.

    Thanks & Regards,
    `

    const msg = {
      from: config.email.from,
      to: 'gaurharsh1737@gmail.com',
      subject: `New website enquiry from harsh at ${new Date().toLocaleTimeString()}`,
      text: textContent
    };

    await transport.sendMail(msg);
  } catch (e) {
    logger.error('Error in sendEnquiryEmail: ' + e);
  }
}

module.exports = {
  transport,
  sendEmail,
  sendEnquiryEmail
};
