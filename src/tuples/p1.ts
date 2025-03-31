import { Equal, Expect } from "./index";

type tupleType = [error: Error | undefined, article?: unknown]

export const fetchArticle = async (): Promise<tupleType> => {
    const res = await fetch("some.dummy.url/api/article");

    if (!res.ok) {
        return [new Error("Fetching article failed.")];
    }

    const article = await res.json();

    return [undefined, article];
};

const example = async () => {
    const [error, article] = await fetchArticle();

    type Tests = [
        Expect<Equal<typeof error, Error | undefined>>,
        Expect<Equal<typeof article, unknown>>
    ];
};