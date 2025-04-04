import { Equal, Expect } from "./index";

export type IsLowercase<Str extends string> = Str extends Lowercase<Str> ? true : false;

type result1 = IsLowercase<"HELLO">;
type test1 = Expect<Equal<result1, false>>;

type result2 = IsLowercase<"hello">;
type test2 = Expect<Equal<result2, true>>;

type result3 = IsLowercase<"I am JAck">;
type test3 = Expect<Equal<result3, false>>;
