/**
 * Created by carlos_figui on 30/5/17.
 */

'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Tips',
            'AuthorId',
            {type: Sequelize.INTEGER}
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Tips', 'AuthorId');
    }
};
