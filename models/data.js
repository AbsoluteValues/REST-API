const Sequelize = require('sequelize');

class TestData extends Sequelize.Model {

    static init(sequelize) {

        return super.init(
            {
                // 테스트 데이터
                Test_Data_Id: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Test_Data_Name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Test_Data_Server_Name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },

                // 테스트 요청 데이터
                Protocol: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Host: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Http_Method: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Header: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Query: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                Parameter: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                Path: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Body: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },

                // 테스트 응답 데이터
                Cookie: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                Http_Status_Code: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                Data: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'TestData',
                tableName: 'test_data',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
};

module.exports = TestData;
