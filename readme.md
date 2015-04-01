##What it can do:

Start it up using "node server.js". Then, go to **http://localhost:3000/allMessages/ANYTHING**. That's the forum at page ANYTHING. Clicking the "Enter Chat" button submits your code to the database under whatever tab you're on, and should refresh the page so you see your input pop up. Clicking either of the two buttons (batman or cars) brings you to those respective tabs. Storage is persistant. 


##How it works:

It runs on a node server with a mongo database offshore. The database has one collection called Message, the schema of which contains two fields, body and tab. Body tells you what to display, tab gives you information on where to display it. The one view in this website (called index.jade) displays a title a chat table, an input text box, and a button. It fetches its array through a get request and a mongoose query, using the value of "tab" as a filter. It submits using a POST and a mongoose save(). Using Jade templating, I made the button's name be the same as the tab's name. I then passed along the button's name to the POST function.

##Code organization:
"postChat.js" is where I store my getMessages and postMessage functions. "routes.js" is where I store my app routes. I require them in server.js, which is how they're set up.
My models are stored in the "models" folder. I made it a node_module so I could require it in different places. 



##Tools:
JQuery for making HTTP GET and POST. 
Node/express for server stuff.
Mongo (on mongolab.com) for database
Jade for views

If you're curious about database stuff, my username was "SamPennLabs" and my password was "password1" for the mongolab.com account.



