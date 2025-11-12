import { add } from "../src/calculator.js";
import {assertEquals,assertExists, assertAlmostEquals, assertArrayIncludes} from "@std/assert";

Deno.test("1 + 2 should be 3", () => {
  assertEquals({}, {});
  assertEquals(add(1, 1), 2);
  assertAlmostEquals(1.0001, 1.001, 0.01);
  assertArrayIncludes([1,2,3], [1]);
  assertExists(undefined);
});

Deno.test("1 + 3 should be 3", () => {
  // assertEquals(add(1, 1), 3);
});
