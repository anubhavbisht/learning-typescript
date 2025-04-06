type TUserStatus =
    | { state: "loading" }
    | { state: "loaded", userData: { id: number, userName: string } }
    | { state: "failed", error: string }

const state1: TUserStatus = { state: "loaded", userData: { id: 1, userName: "anubhav" } }
