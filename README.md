# Social-Network-API
18. NoSQL Challenge: Social Network API

## Description 

 The purpose is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. 


## Table of Contents
* [Installation](#installation)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Screenshots](#screenshots)
* [Video](#video)
* [Built With](#built-with)


## Installation 

1. Clone the repository from GitHub
1. Install `node.js`
1. Install `MongoDB`
1. Run `npm install` to install dependencies. Dependencies include Express.js for routing, a MongoDB database, and the Mongoose ODM.
1. Run `npm start` to start the web server and connect

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Screenshots 



## Video


Video walk-through of User Routes:
* `GET` all users
* `GET` a single user by its `_id` 
* `POST` a new user
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`

https://user-images.githubusercontent.com/49573760/182526392-f5719bfa-fd3d-4506-ae2f-ff879ab93d1f.mov


Video walk-through of Thoughts Routes:
* `GET` to get all thoughts
* `GET` to get a single thought by its `_id`
* `POST` to create a new thought
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`


https://user-images.githubusercontent.com/49573760/182527194-3f401eed-3cde-4cd6-832f-c2283c0ce0b3.mov


Video walk-through of Reactions Routes:
* `POST` to create a reaction 
* `DELETE` to pull and remove a reaction



https://user-images.githubusercontent.com/49573760/182528948-8191e6d0-9e40-436d-9ae2-faededf32234.mov


Video walk-through of Reactions Routes:
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list



## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [express](https://www.npmjs.com/package/express)
* [moment](https://www.npmjs.com/package/moment)
* [mongoose](https://www.npmjs.com/package/mongoose)



