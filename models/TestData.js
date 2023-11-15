const Sequelize = require('sequelize');

class TestData extends Sequelize.Model {

    static init(sequelize) {

        return super.init(
            {
                // 테스트 데이터
                TestDataId: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                TestDataName: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                TestDataServerName: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },

                // 테스트 요청 데이터
                Protocol: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                Host: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                HttpMethod: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                Header: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                Query: {
                    type: Sequelize.STRING(100),
                    allowNull: true,
                },
                Parameter: {
                    type: Sequelize.STRING(100),
                    allowNull: true,
                },
                Path: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                Body: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },

                // 테스트 응답 데이터
                Cookie: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
                HttpStatusCode: {
                    type: Sequelize.TEXT,
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
