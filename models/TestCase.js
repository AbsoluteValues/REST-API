const Sequelize = require('sequelize');

class TestData extends Sequelize.Model {

    static init(sequelize) {

        return super.init(
            {
                // 테스트 영역
                TestCaseId: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                TestName: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                TestInterval: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                TestCreationDate: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
                TestDataList: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },

                // 테스트 결과 영역
                TestStartDate: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
                TestEndDate: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
                TestSuccessRatio: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                TestErrorRatio: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'TestCase',
                tableName: 'test_case',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
};

module.exports = TestData;
