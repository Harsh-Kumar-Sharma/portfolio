const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { sendEnquiryEmail } = require('../services/email.service')

const createEnquiriesController = catchAsync(async (req, res) => {
    // Create new enquiry
    const enquiry = await sendEnquiryEmail();
    res.status(200).send({ statusCode: 201, data: enquiry });
});

module.exports = {
    createEnquiriesController
}