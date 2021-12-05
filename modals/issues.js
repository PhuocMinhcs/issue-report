const { DataTypes } = require('sequelize');
const { sequelizeInstace } = require('../database');

const ReportedIssues = sequelizeInstace.define('ReportedIssues', {
    issue_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    issue_desc: {
        type: DataTypes.STRING,
    },
    is_customer_posted: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    issue_category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    issue_image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_solved: {
        type: DataTypes.BOOLEAN,
    },
}, {
    tableName: 'reported_issues',
    timestamps: true,
    updatedAt: false,
});

module.exports = ReportedIssues;
