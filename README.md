# startup
### Notes
I have used GitHub before but it was for game development
so I didn't really understand it, and it was super janky
I feel like these quick instructions for it seem a lot
simpler than I previously thought, and committing,
pushing, pulling, and merging is much more understandable
to me now.
## Elevator Pitch
I want my start up application to be one where many people can create a story together, one sentence at a time.
Users will have to log in, which will keep them from adding to the story until other users have added something,
to keep people from spamming or hogging most of the story. I also plan on including a voting feature that lets
users nominate a post for deletion, whether it be due to irrelevancy, spam, or inappropriate content. With enough
votes, a post would be removed and the story can continue without it. It may also include a voting feature that
allows a story to end if enough users are satisfied with a certain post as a conclusion, and then the story would
be archived and a new one will begin. Other potential features could include letting users replying to other
story posts or upload images to their own story contributions.
## Rough Sketch
![startup sketch](https://user-images.githubusercontent.com/100855392/215245603-c5aec671-88ba-4558-ac5d-82760b9ffb33.JPG)
## Simon HTML Notes
I learned quite a bit more about how different HTML files can link between each other, and I also learned a lot more
about committing and pushing to GitHub when I am creating new files in VS Code. That gave me a bit of trouble, but
I was able to figure it out and be able to write multiple files and have them show up in the repository after pushing
them.
## Simon CSS Notes
Even though I don't totally understand some of the code that was necessary, particularly for the design of the Simon
play interface, I got a lot of experience using Bootstrap and actually seeing what different Bootstrap classes do
to the elements on the webpage. I also had some fun looking up other Bootstrap button classes and switching the ones
in the examples to other ones that I think fit better.
# Startup HTML and CSS Notes
Colors: #000035 #c9a959
The majority of the work on this project so far has been figuring out forms, and using loads of dividers and sections 
to move, orient, and arrange things on the page in the way that I want them. The main color scheme that I chose for my startup is a navy blue (#000035) and a sort of dark tan (#c9a959). I also learned a lot about using bootstrap elements and how to override certain details in order to personalize them, which I used a lot with buttons, because the bootstrap buttons look great but I had to find ways to change the color, size, etc. I am interested in how it is going to work in the future to make the previous posts show up for every previous user, because right now I just have designs for example posts, but I am excited to learn how to actually have the number of posts necessary for all of the website's use.
## Simon JavaScript Notes
I didn't totally understand how to implement what we've been learning into the website stuff, so this experience definitely helped with that. I now think I can figure out the basic JavaScript on my startup for things like logging in, and hopefully for at least storing someone's individual post, even though it might not display properly and won't display for everyone else. The biggest issue I had was that I did not notice the file of sound effects and it would not let Simon run at all, so I spent ages trying to fix it before I realized I just had to duplicate the assets folder. The main thing that I need to remember is that I still am not able to implement many of the features, so I shouldn't waste time trying to figure out things that will likely come later in the course. As long as I can get my startup to have a somewhat functional login and the text posts being stored SOMEWHERE, then I'm good. I can't let it stress me out as bad as it has the potential to.
## Midterm Notes
< div > is division element

To point to another DNS record, use DNS record type CNAME

Promise first (anything after if there is timeout in promise), then .then(), then .finally(), .catch() if there was a problem caught in the promise. await() waits until original promise resolves

valid JSON: {"x":3} - key value is in double quotes, undefined is not valid

valid javascript {x:3}, doesn't require quotes, COLON 

< javascript > 1+1 < javascript > is not valid

/regex/i - the /i makes it CASE INSENSITIVE

inside to out - content, padding, border, margin

.reduce() reduces array down to 1 value

.map() function maps an array to an array of equal size with values mapped to something else

DOM textContent property sets the child text for the an element

cs260.cs.byu.edu is an example of a subdomain

chmod +x deploy.sh makes a script executable

# Startup JavaScript Notes
I had to redo some portions of my original HTML in order to work in JavaScript, but I figured it out eventually. Adding in the simple, temporary login system was pretty easy because the Simon code had a good example. The biggest challenge in doing JavaScript was adding functionality for adding text posts to the HTML. At first I tried to use a template system, because each post's HTML has a lot of elements, so using the DOM to add each post element-by-element would take a lot of code. After trying to follow instructions for a template, however, I couldn't get it to work, so I started adding functions to add each element of the post. I figured it out, and it gave me a lot more experience with the DOM because I didn't completely understand it when doing the assignments. I also got a lot more experience writing JavaScript functions in addition to the creation and appending of elements, attributes, textContent, etc.

## Simon Service Notes
I studied the code immensely, and I still don't quite understand what the purpose of a lot of it is, but I definitely have learned a lot more about the topics by actually implementing them. I also got some experience using the debug session, which I thought was a cool way to be able to see exactly what each piece of code does.

## Simon DB Notes
Again, I tried my best to understand the code but a lot of it flew over my head. Despite this, I did learn a lot throughout the process of installing and utilizing MongoDB in different ways. Figuring out how to edit the /etc/environment file to put in the database credentials was also a challenge but I felt accomplished after I finally got it to work.

Initially, I did not have the environment variables set up completely correctly but I just went back and tried to figure out what the issue is and figured out what was wrong. I added the environment variables correctly and then had to change the MongoDB URL to be accessible from everywhere, and now Simon is working again!

## Simon Login Notes
This topic was really interesting to me and I enjoyed looking through the authorization code and figuring out how it all works. In high school I learned about password hashing and stuff like that so I liked seeing other layers of complexity added to a login system.

## Simon Websocket Notes
Unlike a few of the previous concepts, I think I already have a pretty good idea of how to use WebSocket. I am excited to implement it into my startup, and I think I will use it for the likes/dislikes of each post. I really understood and liked studying all of the WebSocket code that allows it to determine when to close connections and keep them open, and I thought the way that it works is really fascinating. 

# Startup Service Notes
Updated color scheme: #000035 #ceb26b
I had a lot of trouble implementing the endpoints until I finally moved on to the database implementation, which cleaned it up instantly and made it work all of a sudden. I was very thankful for this, because I understood it a lot more than the basic endpoint stuff. I am very happy with how well I got the login functionality to work. I even took it a bit further than the simon login does, because I made it so that it can tell if either of the login text boxes are empty and won't let you create an account if that is the case. I couldn't think of any original ideas for using third-party endpoints, so I just had the login screen display an inspirational quote like in simon. As I was implementing WebSocket, I was planning on using it for like and dislike buttons, but that was getting a bit complicated, so I decided to use it to message users whenever a story addition had been made. After implementing this, though, I realized that it would not be hard to use WebSocket to also have new story posts show up instantly for other users. I went with this idea, and it was super easy to implement because my addCard functions are pretty versatile and the parameters are easy to fulfill in multiple scenarios.