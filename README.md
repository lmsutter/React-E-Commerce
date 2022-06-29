# About my React E-Commerce Project

The purpose of this project is purely for my own learning and portfolio building. It is not a full-scale e-commerce website. Some of my primary goals in working with this project were to work with an API/asynchronous Javascript, grow in my skill in React, and grow generally in my front end development skills

Overall this was a really enlightening and enjoyable learning experience! This was not my first time working within the React framework, but I think it was helpful for this project with so many different elements that were updating and changing based on different values. I learned a lot about React's rendering cycle and working with rapidly changing states with animation. 

See more below on goals that I still have for this project and lessons learned.


## Highlights

There are a few particular areas of this project that I pushed myself to try something that seemed difficult.

- An adjustable, re-usable, drop down menu. This element might still need a few tweaks but it is designed to be an element that you put in a nav element that takes any number of compenents in it, and creates a drop down menu that animates each its children components to incrementally slide in. I used a function to animate in a variable number of compenents in.
- Swipe up menu from scratch on the cart page. There are plenty of libraries that could have accomplished this more easily. However, I wanted to go through the process of learning how to do it myself though. I learned a lot about needing to have careful control over state through a wide variety of possible inputs or events. 
- It's mobile friendly!

## Lessons Learned

- I learned a lot about calling and using APIs. Originally with this app I just called ALL of the data on site load and stored it in state. This solution was probably a bit more performant for this site as there was less than 50 items to get from the API. However I am assuming that this wouldn't work as well for a larger store that has thousands of items. So I created my own API with Netlify serverless functions for a little practice working on a back end and also to help me get what I needed without grabbing everything. I then had to update everywhere that used the data. Overall I am happy with the result!
- I learned a lot about the particulars of SVG elements! Particularly, with the SVG viewbox how the first two numbers basically offset the image from the top and left while the second two basically alter how "zoomed in" the svg is.
- Infrastructure. It can be incredible helpful to have those building blocks of components. I think I split too many components up as React components when I could have had more components made of multiple HTML elements. Also, while it is nice to have the organization of the pages, containers, and components, I did find myself getting a little lost sometimes and I don't think the extra layer of the "container" was necessary for this particular project. If this project ever scales up in the future though I could see it being helpful to add more elements to the page.
- The justify content value can complicate flex-boxes that scroll. If you are having issues with a flexbox that overflows and scrolls try switching up that value.
- I learned a lot about transforms, z-index, and positioning. I learned that transforming an element will create a new stacking context and that can mess with z-index and fixed elements within that transformed element.
- I am not sure if I did the filters the absolute best way on the category pages. One thing I did learn is that with deeply nested objects, React might not re-render if they are changed. React uses Object.is to see if the new state is the same as the old state. If you change a part of a deeply nested object, Object.is might not catch that. This felt like a little bit of a "hacky" solution, but converting it to and back from JSON worked to force React to think it is a different object.
- Initially I wanted to use useContext for the cart page since it seemed far enough away and some of the elements in between didn't need it. According to the React docs though, if the state is only going 4-5 levels deep, it's usually best to stick with just passing it down, so I did.
- I would have liked to make some of my React elements more re-usable. I wish some of my Content compenents could have accepted grid areas or something for indidividual items instead of such a specific styling.
- Animating a resize of an image is always tricky. You almost never want to animate height because that can take a toll on performance. I tried to just use transform but I also first wanted to reset an image back to it's original aspect ratio. I was trying to create a full sized image that popped up when you clicked on a thumbnail for an item. I ended up just creating a separate react component that rendered with you clicked on the image.
- The swipe up element on the cart page. Overall I feel really good about this but I tried several different ideas that didn't really pan out. At first I tried to start the requestAnimation frame function calling only when I clicked on the slider button. This wasn't a great solution because I couldn't control %100 that the user's mouse would be still over the slider on Mouse Up and it would cancel the animation if it wasn't on the slider button. I just had the request animation frame always running (maybe not the most performant?) and also had to add some event listeners on the page with a useEffect hook to always keep track of the mouse position. Probably the most helpful step of this was limiting how movement was controlled. Originally it was possible for the "velocity" to be greater than 0 but also be at the stopping points so I had to check if it was at the stopping point first and also check for velocity. I greatly simplified my app by having only one area where I set velocity and having the component always move only based on that. By limiting the data or controls that move the component I simplified my app and made it less buggy. I also learned the value of keeping track of state, mapping out what different events would do based on the state of the app, and that, in general, it is helpful to "reset" the state back to the starting position at the end of the event.

## Possible Future goals

- One day I'd really like to make this a Next.js site. I have made one other small site in Next.js but I think it'd be a helpful practice to convert this over to Next.js. I know for a real site the way this site is right now would be impossible to find on the web and not very good for business!
- Commenting. I meant to comment as I went and I did in a few places but it was very inconsistent. 
- Adding a search bar. This wouldn't be too much extended work but I think I'd need to create a new serverless function that searches through all products and returns only those that match the search parameter.

