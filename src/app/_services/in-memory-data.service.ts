import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let allHomeData = [
      {
        "status": 1,
        "homeData": {
          "header": {
            "title": "News App",
            "slogan": "Your simple news app"
          },
          "categories": [{
            "id": 1,
            "title": "Entertrainment"
          },
          {
            "id": 2,
            "title": "Business"
          },
          {
            "id": 3,
            "title": "Sports"
          }],
          "news": [{
            "id": 1,
            "category": 2,
            "title": "fa",
            "headline": "NewsHeadline1",
            "body": "fasdf",
            "footline": "f",
            "date": "12-12-12",
            "author": "ZenRays",
            "images": [{
              "src": "imgs/img1.jpg",
              "alt": "tech parks"
            },
            {
              "src": "imgs/img2.jpg",
              "alt": "VC Funding"
            },
            {
              "src": "imgs/img1.jpg",
              "alt": "tech parks"
            },
            {
              "src": "imgs/img2.jpg",
              "alt": "VC Funding"
            }]
          },
          {
            "id": 2,
            "category": 3,
            "title": "asdfa",
            "headline": "NewsHeadline2",
            "body": "asdfasdf",
            "footline": "asdf",
            "date": "12-12-12",
            "author": "ZenRays",
            "images": [{
              "src": "imgs/img1.jpg",
              "alt": "tech parks"
            },
            {
              "src": "imgs/img2.jpg",
              "alt": "VC Funding"
            },
            {
              "src": "imgs/img1.jpg",
              "alt": "tech parks"
            },
            {
              "src": "imgs/img2.jpg",
              "alt": "VC Funding"
            }]
          }],
          "topVideos": [{
            "id": 2,
            "category": 3,
            "title": "asdfa",
            "headline": "TopVideoID2",
            "footline": "asdf",
            "date": "12-12-12",
            "author": "ZenRays",
            "alt": "alternative text for video"
          },
          {
            "id": 3,
            "category": 3,
            "title": "asdfa",
            "headline": "TopVideoID3",
            "footline": "asdf",
            "date": "12-12-12",
            "author": "ZenRays",
            "alt": "alternative text for video"
          }],
          "footer": {
            "footline": "asdfasd"
          }
        }
      }   
    ];
    return { allHomeData };
  }
}