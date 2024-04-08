export interface Note {
    id: string;
    title: string;
    description: string;
    created?: string;
    updated?: string;
}

export let Notes: Note[] = [
    { id: "one", title: "This is the first note.", description: "This is the description of the first note.", created: "8 April 2024", updated: "8 April 2024" },
    { id: "two", title: "This is the second note.", description: "This is the description of the second note.", created: "9 April 2024" },
    { id: "three", title: "This is the third note.", description: "This is the description of the third note.", created: "7 April 2024" },
    { id: "four", title: "This is the fourth note.", description: "this is the description of the fourth note.", created: "6 April 2024" }
] 