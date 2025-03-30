type value = {
    title: string,
    author: string,
    price: number
}
export const books: Map<number, value> = new Map();

// we should not get error in this
books.set(1, { title: "book #1", author: "superman", price: 99.99 });

// we should get errors in all below 3
books.set(2, { title: 123, author: true, price: "200" });
books.set(3, "taaa daaaa!");
books.set("4", { title: "book #2", author: "batman", price: 99.99 });