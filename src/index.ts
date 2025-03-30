const message: string = 'Hello world'
console.log(message)

export function getMessage(): string {
    return 'Hello world!';
}

export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false; 