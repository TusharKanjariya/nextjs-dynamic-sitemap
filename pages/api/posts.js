export const Posts = [
    {
        "id": 1,
        "title": "Understanding Promises in JavaScript",
        "slug": "understanding-promises-in-javascript",
        "author": "Alex Taylor",
        "content": "Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.",
        "tags": ["JavaScript", "Promises", "Asynchronous"],
        "publishedDate": "2024-09-22T10:00:00Z",
        "views": 100,
        "likes": 30,
        "comments": [
            {
                "id": 1,
                "author": "Lucy Green",
                "content": "I love this topic! Very helpful.",
                "publishedDate": "2024-09-23T09:00:00Z"
            }
        ]
    },
    {
        "id": 2,
        "title": "CSS Flexbox Explained",
        "slug": "css-flexbox-explained",
        "author": "Tom White",
        "content": "Flexbox is a layout model that allows you to design complex layouts with ease and is a great alternative to CSS Grid in some cases.",
        "tags": ["CSS", "Flexbox", "Web Design"],
        "publishedDate": "2024-09-24T11:00:00Z",
        "views": 250,
        "likes": 55,
        "comments": []
    },
    {
        "id": 3,
        "title": "An Introduction to TypeScript",
        "slug": "introduction-to-typescript",
        "author": "Diana Black",
        "content": "TypeScript is a superset of JavaScript that compiles to plain JavaScript, adding static typing and other features.",
        "tags": ["TypeScript", "JavaScript", "Programming"],
        "publishedDate": "2024-09-25T14:00:00Z",
        "views": 400,
        "likes": 95,
        "comments": [
            {
                "id": 1,
                "author": "Max Steel",
                "content": "Can't wait to dive deeper into TypeScript!",
                "publishedDate": "2024-09-26T16:00:00Z"
            }
        ]
    }
];

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            res.status(200).send(Posts);
            break;

        default:
            break;
    }
}