const Sequelize = require('sequelize');

class TestData extends Sequelize.Model {

    static init(sequelize) {

        return super.init(
            {
                // 테스트 결과 영역
                Test_Start_Date: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Test_End_Date: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Test_Success_Ratio: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Test_Error_Ratio: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'caseresult',
                tableName: 'test_case',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
};

module.exports = TestData;
