const bcore = require("@babel/core");
const logExpressionsPlugin = require("./index");

const config = {
  plugins: [[logExpressionsPlugin]],
};
const resultOf = (str) => bcore.transformSync(str, config).code;

it("works top level", () => {
  expect(resultOf("('12')")).toMatchInlineSnapshot(`"console.log('12');"`);
  expect(resultOf("({ some: 'thing' })")).toMatchInlineSnapshot(`
    "console.log({
      some: 'thing'
    });"
  `);
  expect(resultOf("{ some: 'thing' }")).toMatchInlineSnapshot(`
    "{
      some: 'thing';
    }"
  `);
  expect(resultOf("['arr', 'of', 'things']")).toMatchInlineSnapshot(
    `"console.log(['arr', 'of', 'things']);"`
  );
  expect(resultOf("123")).toMatchInlineSnapshot(`"console.log(123);"`);
  expect(resultOf("foo")).toMatchInlineSnapshot(`"console.log(foo);"`);
  expect(resultOf("obj.foo")).toMatchInlineSnapshot(`"console.log(obj.foo);"`);
  expect(resultOf("obj.foo.bar.baz")).toMatchInlineSnapshot(
    `"console.log(obj.foo.bar.baz);"`
  );
  expect(resultOf("3 + 2")).toMatchInlineSnapshot(`"console.log(3 + 2);"`);
  expect(resultOf("obj.method()")).toMatchInlineSnapshot(`"obj.method();"`);
  expect(resultOf("obj.foo = 3")).toMatchInlineSnapshot(`"obj.foo = 3;"`);
  expect(resultOf("obj.foo++")).toMatchInlineSnapshot(`"obj.foo++;"`);
  expect(resultOf("++obj.foo")).toMatchInlineSnapshot(`"++obj.foo;"`);
  expect(resultOf("true ? 11 : false ? 12 : 13")).toMatchInlineSnapshot(
    `"console.log(true ? 11 : false ? 12 : 13);"`
  );
});

it.skip("works inside blocks", () => {
  expect(resultOf("{'12'; 42;}")).toMatchInlineSnapshot(`
    "{
      console.log('12');
      console.log(42);
    }"
  `);
  expect(resultOf("{'12'; { 42; }}")).toMatchInlineSnapshot(`
    "{
      console.log('12');
      {
        console.log(42);
      }
    }"
  `);
});

it("works inside function expressions", () => {
  expect(resultOf("const foo = () => {{ 45; } '12';  return 42;}"))
    .toMatchInlineSnapshot(`
    "const foo = () => {
      {
        console.log(45);
      }
      console.log('12');
      return 42;
    };"
  `);
});

it("works inside function declarations", () => {
  expect(resultOf("function foo() {const bar = '12'; bar; 53; return 42;}"))
    .toMatchInlineSnapshot(`
    "function foo() {
      const bar = '12';
      console.log(bar);
      console.log(53);
      return 42;
    }"
  `);
});
