import { Equal, Expect } from "./index";

type DotToUnderscores<Str> = Combine<Separate<Str, ".">, "_">;

type Separate<Str, Separator extends string> =
    Str extends `${infer first}${Separator}${infer Rest}` ? [first, ...Separate<Rest, Separator>]
    : [Str]
    ;

type Combine<List, Separator extends string> =
    List extends [infer First extends string, ...infer Rest]
    ? Rest extends []
    ? First
    : `${First}${Separator}${Combine<Rest, Separator>}`
    : "";

type As<A, B> = A extends B ? A : never;

type res1 = Separate<"a.b.c", ".">;
type test1 = Expect<Equal<res1, ["a", "b", "c"]>>;

type res2 = Combine<["a", "b", "c"], ".">;
type test2 = Expect<Equal<res2, "a.b.c">>;

type res3 = DotToUnderscores<"hello">;
type test3 = Expect<Equal<res3, "hello">>;

type res4 = DotToUnderscores<"user.name">;
type test4 = Expect<Equal<res4, "user_name">>;

type res5 = DotToUnderscores<"learning.is.fun">;
type test5 = Expect<Equal<res5, "learning_is_fun">>;