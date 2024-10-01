export const Blogs = [
    {
        "id": 1,
        "title": "Understanding JavaScript Closures",
        "slug": "understanding-javascript-closures",
        "author": "Jane Doe",
        "content": "JavaScript closures are a fundamental concept that allows functions to retain access to their outer scope, even when the outer function has finished executing.",
        "tags": ["JavaScript", "Closures", "Programming"],
        "publishedDate": "2024-09-15T12:00:00Z",
        "views": 150,
        "likes": 45,
        "comments": [
            {
                "id": 1,
                "author": "John Smith",
                "content": "Great explanation of closures! Thanks for sharing.",
                "publishedDate": "2024-09-16T10:00:00Z"
            },
            {
                "id": 2,
                "author": "Emily Davis",
                "content": "I still find closures a bit confusing. Can you elaborate more?",
                "publishedDate": "2024-09-17T14:30:00Z"
            }
        ]
    },
    {
        "id": 2,
        "title": "A Guide to CSS Grid Layout",
        "slug": "guide-to-css-grid-layout",
        "author": "Alice Johnson",
        "content": "CSS Grid Layout is a two-dimensional layout system for the web that allows you to design web pages using rows and columns.",
        "tags": ["CSS", "Grid", "Web Design"],
        "publishedDate": "2024-09-18T09:00:00Z",
        "views": 200,
        "likes": 60,
        "comments": []
    },
    {
        "id": 3,
        "title": "Getting Started with React",
        "slug": "getting-started-with-react",
        "author": "Mark Lee",
        "content": "React is a popular JavaScript library for building user interfaces. This article will cover the basics of getting started with React.",
        "tags": ["React", "JavaScript", "Frontend"],
        "publishedDate": "2024-09-20T15:00:00Z",
        "views": 300,
        "likes": 80,
        "comments": [
            {
                "id": 1,
                "author": "Sara Brown",
                "content": "This is a perfect starter guide for beginners!",
                "publishedDate": "2024-09-21T11:00:00Z"
            }
        ]
    }
];

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            res.status(200).send(Blogs);
            break;

        default:
            break;
    }
}