import t from "tap";

t.test("a test description", (t) => {
  // t.plan(1);
  const myVar = 42;
  t.equal(myVar, 42, "This number is 42");

  const sameStructure = { hello: "world" };
  t.strictSame(sameStructure, { hello: "world" }, "the object is correct");

  const almostLike = { hello: "world" };
  t.match(almostLike, { hello: "world" }, "the object is simi8lar");

  const almostLike2 = { hello: "world", foo: "bar" };
  t.match(almostLike2, { hello: "world", foo: /BAR/i }, "the object is simi8lar even with regex");
  t.end();
});

t.test("sub test", function testFunction(t) {
  t.plan(2);
  const falsyValue = null;
  t.notOk(falsyValue, "it is a falsy value");
  t.test("boolean assertions", (subTapTest) => {
    subTapTest.plan(1);
    subTapTest.ok(true, "true is ok");
  });
});
