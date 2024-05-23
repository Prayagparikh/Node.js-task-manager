

## A Task Manager RESTful API to manage my time and daily goals.
* After graduating from MS in Computer Science in USA, it was important for me to deal with the new phase of life and to manage my time effectively. 
* Therefore, I though of utilizing my software skills creatively to solve this personal problem, instead of using any available application.

Website: https://node-task-manager-vuue.onrender.com/

Note: Give it upto 20 seconds to load. You can access to this website, however, it's not having any login or user authentication for all users, so you will be seeing my tasks. Feel free to edit them.

### Download the zip or use 'git clone' command to get the project in your local:
1. Go to the folder path in terminal and use following commands: 
`npm init` \
`npm install`

2. You need to create a .env file in and add this one line
`MONGO_URI = "CONNECTION_STRING_URI_AFTER_CREATING_CLUSTER_ON_ATLAS_MONGODB_WEBSITE_CLICK_ON_CONNECT_BUTTON_TO_SEE_THIS_URI"`

3. Type this command in terminal: `npm start`
4. Locate to the http://localhost:5000 or the port number you have specified in {port} variable.

### Tech Used
1. Node.js -> JavaScript runtime environment
2. Express.js -> Node's web application framework, to simplify the HTTP server responses and to use middlewares.
3. Atlas MongoDB -> Online and free cloud database service. Create a new 'Cluster' and click on the 'Connect' button to see the 'Connection_String'. You can check any youtube short tutorial to understand this, if facing any challenges.
4. HTML/CSS/DOM JavaScript: For front-end
5. Postman: To test the routes without building front-end first.
6. RESTful Web Architecture: To use HTTP web protocol and HTTP methods(get, post, patch, delete) using Express.js.
