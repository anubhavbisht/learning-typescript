import { Equal, Expect } from "./index";

type ExtractPlaceholders<Cmd> =
  Cmd extends `${infer _Before}<${infer Param}>${infer Rest}`
    ? { [K in Param]: string } & ExtractPlaceholders<Rest>
    : {};

/**
 * Declares a function `runCommand` that takes a command template string
 * and an object of parameters. The parameters object must exactly match the
 * placeholders extracted from the command template.
 */
export declare function runCommand<Cmd extends string>(
    command: Cmd,
    args: ExtractPlaceholders<Cmd>
): void;

// Example 1: A command with a single placeholder.
type testCase1 = ExtractPlaceholders<"deploy <env>">;
type test1 = Expect<Equal<testCase1, { env: string }>>;

// Example 2: A command with two placeholders.
type testCase2 = ExtractPlaceholders<"deploy <env> --version <ver>">;
type test2 = Expect<Equal<testCase2, { env: string } & { ver: string }>>;

// Example 3: A command with no placeholders returns an empty object.
type testCase3 = ExtractPlaceholders<"status">;
type test3 = Expect<Equal<testCase3, {}>>;