const Sequelize = require('sequelize');

class TestData extends Sequelize.Model {

    static init(sequelize) {

        return super.init(
            {
                // 테스트 영역
                Test_Case_Id: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                Test_Name: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                Test_Interval: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                Test_Creation_Date: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
                Test_Data_List: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },

                // 테스트 결과 영역
                Test_Start_Date: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
                Test_End_Date: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
                Test_Success_Ratio: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                Test_Error_Ratio: {
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
