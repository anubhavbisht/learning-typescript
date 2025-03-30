// union type
type NotificationMethod = "sms" | "email"
const notification1: NotificationMethod = "email"

// intersection type
type Person = {name: string}
type Recording = {recordId: number}

type Employee = Person & Recording
const anubhav: Employee = {name: "anubhav bisht", recordId: "1232"}