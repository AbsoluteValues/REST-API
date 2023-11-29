const { check } = require('express-validator');

exports.dataValidation = [
    [check('Test_Data_Id').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Test_Data_Name').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Test_Data_Server_Name').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Protocol').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Host').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Http_Method').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Header').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Query').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Parameter').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Path').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Body').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Cookie').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Http_Status_Code').trim().not().isEmpty().withMessage("Not Null").isInt().withMessage("Int")],
    [check('Data').trim().not().isEmpty().withMessage("Not Null")],
];

exports.caseValidation = [
    [check('Test_Case_Id').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Test_Name').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Test_Interval').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Test_Creation_Date').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
    [check('Test_Data_List').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
];
