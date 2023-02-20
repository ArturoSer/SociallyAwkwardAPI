# SociallyAwkwardAPI

## Table of Contents
- Description
- User Story
- Acceptanced Criteria
- Usage

## Description
In this API you will be able to use a Nosql database to help build and structure anytype of API for a website and carefully handle different types of data.

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

## Usage

To be able to use this download the code and then run "npm i" to install dependencies then afterwards run "npm start" in terminal and open your insomnia to see all the API being held :) 