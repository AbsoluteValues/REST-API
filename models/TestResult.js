const Sequelize = require('sequelize');

class TestData extends Sequelize.Model {

    static init(sequelize) {

        return super.init(
            {
                // 테스트 결과
                TestDataId: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                TestCaseId: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                ResponseMs: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                HttpStatusCode: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                IsSuccess: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                ResponseData: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'TestResult',
                tableName: 'test_result',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
};

module.exports = TestData;
