export const emails: Set<string> = new Set();

// we should not get error in this
emails.add("test@gtest.com");
emails.add("blabla@BlaBlaBla.org");

// we should get error in this
emails.add(true);
emails.add({ id: "jfsdlfjlksdjfdl" });