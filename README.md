# About Cheesy

We built Cheesy as a way for you to learn a bit more about your favorite cheeses! You can learn more about a cheese, add it to your cart, and also add your favorites for others to learn about!

## We Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Getting the site open

In the project directory, you can run:

#### `json-server --watch db.json`

This will start up the JSON server with the cheese data.
Open [http://localhost:3000/cheeses](http://localhost:3000/cheeses) to view the cheeses in your browser.

#### `cd my-app` and then `npm start`

Runs the app in your browser.

The page will reload when you make changes.

## Functionality

We used client-side routing to make our app more appealing and user-friendly.

In our header, you can navigate between All Cheeses, Your Cart, and the form to add new cheeses.

The bottom section of our app is the Cheese Page, which contains switchable components of our app.

### All Cheeses

This component shows all the cheeses being fetched from the db.json file. Each cheese has an info button that you can click which will route you to the Cheese Info component and an Add To Cart button that will send the clicked cheese to your cart. See if anything happens when you try to add a cheese to your cart more than once!

#### Cheese Info

This component will give you a more in depth view of the cheese you have clicked on.

### Cart Cheese

This component will show the cheeses you have added to your cart. You can still route to the info card from here, but you can also click the Remove From Cart button to take the cheese out of your cart.

### Cheese Form

If you click the Cut The Cheese button in the header, you'll be taken to the Cheese Form component where you can add your own favorite cheese to the main list for everyone to see. Make sure to find a good picture to go with it!

