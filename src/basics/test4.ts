import { Equal, Expect } from "../index";

export async function fetchServerVersion() {
    const response = await fetch("https://api.example.com/v");
    const data: number = await response.json();
    return data;
}

const example = async () => {
    const version = await fetchServerVersion();

    type test = Expect<Equal<typeof version, number>>;
};