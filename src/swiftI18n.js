const { registerCommand, msg } = require('../utils/vs');
const { openFileByPath } = require('../utils');
const { operation } = require('../utils/constant');
const resolveEditor = require('../lib/resolveEditor');

module.exports = context => {
    context.subscriptions.push(
        registerCommand(operation.swiftI18n.cmd, uri => {
            if (uri && uri.path) {
                openFileByPath(uri.path).then(editor => {
                    resolveEditor({ editor, context });
                });
            } else {
                resolveEditor({ context });
            }
        })
    );
};
