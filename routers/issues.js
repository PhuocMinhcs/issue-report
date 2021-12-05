const express = require('express');
const { QueryTypes } = require("sequelize");
const { sequelizeInstace } = require('../database');
const ReportedIssues = require('../modals/issues');
const router = express.Router();

const ISSUE_CATEROGIES = {
    HOT_DESK: "HOT_DESK",
    MEETING_ROOMS: "MEETING_ROOMS",
    PARKING: "PARKING",
    PHONE_BOOTHS: "PHONE_BOOTHS",
};
// Items per page
const DEFAULT_PER_PAGE = 2;

/**
 * Get issues
 * query: {
 *  { number } - page(optional)
 *  { number } - per_page(optional)
 * }
 */
router.get('/', async (req, res) => {
    try {
        const result = {
            totalPage: 0,
            currentPage: 0,
            nextPage: 0,
            issues: [],
        }
        const { page, per_page } = req.query;
        const offset = page ? DEFAULT_PER_PAGE * (page - 1) : 0;
        const limit = per_page ? per_page : DEFAULT_PER_PAGE;

        const { count, rows } = await ReportedIssues.findAndCountAll({ limit, offset , raw: true });

        result.totalPage = Math.ceil(count/limit);
        result.currentPage = Number(page);
        result.nextPage = result.currentPage + 1;

        if (result.nextPage > result.totalPage) {
            delete result.nextPage;
        }

        result.issues = rows;
        res.json({
            message: 'Success',
            data: result,
        });
    } catch(e) {
        res.status(500).json({
            status: 'Error',
            message: 'Something went wrong',
        });
    }
});

router.get('/count', async (req, res) => {
    try {
        const countCustomerIssues = ReportedIssues.count({
            where: {
                is_customer_posted: 1,
            },
        });
        const countEmployeeIssues = ReportedIssues.count({
            where: {
                is_customer_posted: 0,
            },
        });
        const count1 = ReportedIssues.count({
            where: {
                issue_category: ISSUE_CATEROGIES.HOT_DESK,
            },
        });
        const count2 = ReportedIssues.count({
            where: {
                issue_category: ISSUE_CATEROGIES.MEETING_ROOMS,
            },
        });
        const count3 = ReportedIssues.count({
            where: {
                issue_category: ISSUE_CATEROGIES.PARKING,
            },
        });
        const count4 = ReportedIssues.count({
            where: {
                issue_category: ISSUE_CATEROGIES.PHONE_BOOTHS,
            },
        });

        const [
            customerIssues,
            employeeIssues,
            hotDesk,
            meetingRooms,
            parking,
            phoneBooths,
        ] = await Promise.all([
            countCustomerIssues,
            countEmployeeIssues,
            count1,
            count2,
            count3,
            count4,
        ]);

        res.json({
            status: 'Success',
            data: {
                customerIssues,
                employeeIssues,
                categories: {
                    hotDesk,
                    meetingRooms,
                    parking,
                    phoneBooths,
                }
            },
        });
    } catch(e) {
        res.status(500).json({
            status: 'Error',
            message: 'Something went wrong',
        });
    }
});

router.get('/:year', async (req, res) => {
    try {
        const { year } = req.params;
        const { workplace } = req.query;
        const dbQuery = `
        SELECT MONTH(createdAt) AS month, COUNT(issue_name) AS count
        FROM reported_issues\
        WHERE issue_category='${workplace}'
        AND YEAR(createdAt)=${year}
        GROUP BY MONTH(createdAt)
        ORDER BY MONTH(createdAt) ASC`;

        const result = await sequelizeInstace.query(dbQuery, { type: QueryTypes.SELECT });

        res.json({
            message: 'success',
            data: result,
        });
    } catch (e) {
        res.status(500).json({
            status: 'Error',
            message: 'Something went wrong',
        });
    }
});

exports.issueRouter = router;
