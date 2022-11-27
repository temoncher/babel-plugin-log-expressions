// @ts-check
/**
 * @param {Object} api
 * @param {import('@babel/core').types} api.types
 * @param {Object} options
 * @param {(import('@babel/core').Node['type'])[]} options.inside
 * @param {(import('@babel/types').Expression['type'])[]} options.ignoreExpressions
 * @returns {import('@babel/core').PluginObj}
 */
module.exports = ({ types: t }, options) => {
  const inside = options.inside ?? ["Program", "BlockStatement"];
  const ignoreExpressions = options.ignoreExpressions ?? [
    "CallExpression",
    "UpdateExpression",
    "AssignmentExpression",
  ];

  const logExpression = t.memberExpression(
    t.identifier("console"),
    t.identifier("log")
  );

  return {
    name: "log-expressions",
    visitor: {
      ExpressionStatement(path) {
        if (
          inside.includes(path.parent?.type) &&
          !ignoreExpressions.includes(path.node.expression.type)
        ) {
          const consoleLogCall = t.callExpression(logExpression, [
            path.node.expression,
          ]);

          path.replaceWith(consoleLogCall);
        }
      },
    },
  };
};
