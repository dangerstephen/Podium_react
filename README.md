# Podium Code Challenge
Interview code challange sent to me by [Podium][]

## The Challenge 
Shakespeare has been getting a lot of reviews recently about his plays. So far he has managed to build a backend API to serve them, but he doesn't have the chops to finish out the UI. That's where you come in, your task is to build a client side app for Shakespeare's API. The design of the application is up to you.

Two endpoints exist for this API.

Reviews Index
GET shakespeare.podium.co/api/reviews
Response looks like the following https://gist.github.com/telnicky/88e98de5a165037f81fa72694d410a35

Reviews Show
GET shakespeare.podium.co/api/reviews/:id
Response looks like the following https://gist.github.com/telnicky/231df61e401cb6aa2279cb2adfa05c5a

To get Authorized for using the API you must base your token into the Authorization header. 


## Download and Installation

```
git clone https://github.com/dangerstephen/podium_react.git
cd podium_react
npm install
```

## Getting Started
This app was created using [React][].
To startup & run the application

```
npm start
```
This will start the app and open a tab in your browser running the app.

NOTE: If the broweser fails to open you can run the app by going to localhost:3000 from your browser of choice.

## Testing 

We all love testing, to run the tests on this application run
```
npm test
```

## How it works

The app sends a GET request to shakespeare.podium.co/api/reviews and grabs the array of reviews. The array of reviews is then iterated over and cards with important information are created for each review. When you mouse over each card the shakespeare.podium.co/api/reviews/:id route is hit updating the array to show the body of that review.


Cards Prior to the mouse over look like this:

<img width="1433" alt="screen shot 2017-05-10 at 12 01 08 am" src="https://cloud.githubusercontent.com/assets/22550925/25886765/f810e36e-3513-11e7-9683-4083895f4eb1.png">

After the mouse over they add the body of the review and look like this: 

<img width="1440" alt="screen shot 2017-05-10 at 12 01 54 am" src="https://cloud.githubusercontent.com/assets/22550925/25886783/076316b6-3514-11e7-9354-acbe4a8d0195.png">



[Podium]: https://www.podium.com
[React]: https://facebook.github.io/react/
