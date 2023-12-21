const Sequelize = require('sequelize');

class Result extends Sequelize.Model {

    static init(sequelize) {

        return super.init(
            {
                // 테스트 결과
                Test_Data_Id: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Test_Case_Id: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Response_Ms: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Http_Status_Code: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                Is_Success: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Response_Data: {
                    type: Sequelize.STRING,
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

module.exports = Result;
