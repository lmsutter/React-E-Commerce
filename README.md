# About my React E-Commerce Project

The purpose of this project is purely for my own learning and portfolio building. It is not a full-scale e-commerce website. It only includes the front end. It does reach out to an API to get the data for the individual E-Commerce items. This project is not currently finished. I still need to finish the cart page, comment most of the code, and clean it up in general.

Overall this was a really enlightening and enjoyable learning experience! This was not my first time working within the React framework, but I think it was helpful for this project with so many different elements that were updating and changing based on different values. I learned a lot about React's rendering cycle and working with rapidly changing states with animation. 

See more below on goals that I still have for this project and lessons learned.

## Unfinished goals for this project

- Refactoring how I pull in the API data entirely. I can't imagine that this would scale for larger applications to pull in all of the data all at once and pass all of the data down to every object. On the first page I would just get 3 random items from the store. Each category has it's own API call so I could use that for those pages. The cart page might be a little more tricky but I think I could make an array of API requests needed based on the items in the store and use Promise.all() to load only the needed
- Finalize the cart page. I still need to style it so that the totals component doesn't swipe in. That is only meant for mobile. I also need to actually calculate totals.
- I would also like to 
- Comment my code!
- Clean up my code both visually and looking for bad coding concepts or unclear variable declarations.

## Highlights

There are a few particular areas of this project that I pushed myself to try something that seemed difficult.

- An adjustable drop down menu. This element might still need a few tweaks but it is designed to be an element that you put in a nav element that takes any number of compenents in it, and creates a drop down menu that animates in its children components. I used a function to animate in a variable number of compenents in.
- Swipe up menu from scratch on the cart page. There are plenty of libraries that could have accomplished this much better and quicker. I wanted to go through the process of learning how to do it myself though. I learned a lot about needing to have careful control over state through a wide variety of possible inputs or events. 
- It's mobile friendly!

## Lessons Learned

- I learned a lot about the particulars of SVG elements! Particularly, with the SVG viewbox how the first two numbers basically offset the image from the top and left while the second two basically alter how "zoomed in" the svg is.
- Infrastructure. It can be incredible helpful to have those building blocks of components. I think I split too many components up as React components when I could have had more components made of multiple HTML elements. Also, while it is nice to have the organization of the pages, containers, and components, I did find myself frequently forgetting to put the event listeners on the actual component, not just where it is called.
- The justify content value can mess up flex-boxes that scroll. If you are having issues with a flexbox that overflows and scrolls try switching up that value.
- I learned a lot about transforms, z-index, and positioning. I learned that transforming an element will create a new stacking context and that can mess with z-index and fixed elements within that transformed element.
- I am not sure if I did the filters the absolute best way on the category pages. One thing I did learn is that with deeply nested objects, React might not re-render if they are changed. React uses Object.is to see if the new state is the same as the old state. If you change a part of a deeply nested object, Object.is might not catch that. This felt like a little bit of a "hacky" solution, but converting it to and back from JSON worked to force React to think it is a different object.
- Initially I wanted to use useContext for the cart page since it seemed far enough away and some of the elements in between didn't need it. According to the React docs though, if the state is only going 4-5 levels deep, it's usually best to stick with just passing it down, so I did.
- I would have liked to make some of my React elements more re-usable. I wish some of my Content compenents could have accepted grid areas or something for indidividual items instead of such a specific styling.
- Animating a resize of an image is always tricky. You never want to animate height because that can take a toll on performance. I tried to just use transform but I also first wanted to reset an image back to it's original aspect ratio. I was trying to create a full sized image that popped up when you clicked on a thumbnail for an item. I ended up just creating a separate react component that rendered with you clicked on the image.
- The swipe up element on the cart page. Overall I feel really good about this but I tried several different ideas that didn't really pan out. At first I tried to start the requestAnimation frame function calling only when I clicked on the slider button. This wasn't a great solution because I couldn't control %100 that the user's mouse would be still over the slider on Mouse Up and it would cancel the animation if it wasn't on the slider button. I just had the request animation frame always running (maybe not the most performant?) and also had to add some event listeners on the page with a useEffect hook to always keep track of the mouse position. I also learned the value of keeping track of state, mapping out what different events would do based on the state of the app, and that, in general, it is helpful to "reset" the state back to the starting position at the end of the event.
