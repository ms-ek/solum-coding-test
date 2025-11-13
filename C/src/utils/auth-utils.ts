
export type User = {
    email: string;
    password: string;
    name: string;
}

const USERS: User[] = [
    { email: "test1@email.com", password: "Password1!", name: "Test User1" },
    { email: "test2@email.com", password: "Password2!", name: "Test User2" },
    { email: "test3@email.com", password: "Password3!", name: "Test User3" },
]

export function loginUser(email: string, password: string): User | undefined {
    return USERS.find(user => user.email === email && user.password === password);
}