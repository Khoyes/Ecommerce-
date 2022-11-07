exports.books = (req,res) => {
    res.json({
        books: [
            {
                id: 1,
                name: "Cat In The Hat",
                price: 2.49,
                details: "A cat on a journey",
            },
            {
                id: 2,
                name: "The Hunger Games",
                price: 4.99,
                details: "An intense game of survival",
            },
            {
                id: 3,
                name: "Harry Potter - The Deathly Hallows",
                price: 8.49,
                details: "The finale of Harry's journey",
            },
        ]
    })
}