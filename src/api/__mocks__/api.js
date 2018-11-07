export const tokenGenerate = jest.fn().mockImplementationOnce(()=>({
    token: 'token-asddsaasddas-token'
})).mockImplementationOnce(()=>{
    throw(new Error({error: 'token not found'}))
})

export const contentList = jest.fn().mockImplementationOnce(() => ({
    contentLists: [
        {
            "id": 19999,
            "title": "Shesh Belar Kabbo",
            "duration": "00:43:28",
            "publicationDate": "2016-11-12T15:10:00+0000",
            "youtubeId": "Pe1K5iVV9XE",
            "genre": [
                {
                    "name": "Romantic",
                    "slug": "romantic"
                }
            ],
            "tags": [],
            "synopsis": {
                "shortSynopsis": null
            },
            "releasedDate": "21-10-2016",
            "castAndCrew": null,
            "userData": {
                "userRating": 0,
                "userLike": true,
                "watchLater": false
            },
            "videoUrl": null,
            "is_premium": false,
            "show_notification": false,
            "releasedYear": 2016,
            "bongoId": "R8AhBYIl6qr",
            "rating": null,
            "tvioViews": 35283
        },
        {
            "id": 25338,
            "title": "Shei Meyeta",
            "duration": "00:53:23",
            "publicationDate": "2017-05-18T11:06:00+0000",
            "youtubeId": "LN5856S6X0o",
            "genre": [
                {
                    "name": "Dramatic",
                    "slug": "dramatic"
                }
            ],
            "tags": [
                {
                    "id": 2,
                    "name": "Eid Ul-Fitr",
                    "slug": "eid-ul-fitr"
                }
            ],
            "synopsis": {
                "shortSynopsis": null
            },
            "releasedDate": "0-0-2016",
            "castAndCrew": null,
            "userData": {
                "userRating": 0,
                "userLike": true,
                "watchLater": false
            },
            "videoUrl": null,
            "is_premium": false,
            "show_notification": false,
            "releasedYear": 2016,
            "bongoId": "yEHf1H29H9j",
            "rating": null,
            "tvioViews": 76503
        },
        {
            "id": 27947,
            "title": "Nail Polish",
            "duration": "01:01:26",
            "publicationDate": "2017-10-28T12:40:00+0000",
            "youtubeId": null,
            "genre": [
                {
                    "name": "Dramatic",
                    "slug": "dramatic"
                }
            ],
            "tags": [],
            "synopsis": {
                "shortSynopsis": null
            },
            "releasedDate": null,
            "castAndCrew": null,
            "userData": {
                "userRating": 0,
                "userLike": true,
                "watchLater": false
            },
            "videoUrl": null,
            "is_premium": false,
            "show_notification": false,
            "releasedYear": 0,
            "bongoId": "wqI9Uu4AcCW",
            "rating": null,
            "tvioViews": 10230
        }
    ]
})).mockImplementationOnce(()=>{
    throw(new Error({error: 'Content List not found'}))
})