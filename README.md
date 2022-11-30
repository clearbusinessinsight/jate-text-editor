# Progressive Web Application

## Description
The application is a web text editor where you can take notes, enter code snippets and then retrieve them with or without the internet.

The URL is https://my-jate-editor.herokuapp.com/

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [License](#license)
* [Questions](#questions)
* [Author](#author)

## Installation

* This application will require the installation of Node.js and various npm packages.

*   Run - npm init
*   Run - npm install
*   Run - npm run build
*   Run - npm run start
* The required modules are bundled in the package.json file and at CLI or integrated terminal type in **npm run install**, the modules will be installed.       

## Usage

1.
``````    
WHEN I open my application in my editor
THEN I should see a client server folder structure
``````
*Below is the screenshot of the client server folder structure.  The folder structure have been set up or given in this structure.*

![Folder Structure](./assets/folder%20structure.png)

2.
``````
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
``````
*Below is the screenshot of server running*

![Folder Structure](./assets/server.png)

3.
``````
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
``````
*Below is the screenshot of the generated HTML, service worker and a manifest file*

![service worker](./assets/webpack%20bundle.png)

4.
``````
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
``````
*Below is the screenshot of the application information*

![alt text](./assets/manifest.png)

5.
``````
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
``````
*Below is the  screenshot of content in the text editor has been retrieved from the IndexedDB"*

![alt text](./assets/Javascript%20works.png)

6.
``````
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
``````
*Below is the screenshot data storage*

![alt text](./assets/database%20storage.png)

7.
``````
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
``````
*Below is the screenshot of the data saved on lost focus*

![alt text](./assets/data%20saved%20on%20lost%20focus.png)

8.
``````
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
``````
*Below is the screenshot of the app on reopen*

![alt text](/assets/reopen%20app.png)

9.
``````
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
``````
*Below is the screenshot of the desktop icon*

![alt text](./assets/desktop%20icon.png)

10.
 ``````
WHEN I load my web application
THEN I should have a registered service worker using workbox
``````
*Below is the screenshot of the service worker*

![alt text](./assets/registered%20service%20worker.png)

11.
``````
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
``````
*Below is the screenshot of the Cached Storage*

![service worker](./assets/registered%20service%20worker.png)

11.
``````
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application 
``````
*Below is the screenshot of Heroku info*

![Heroku Build](./assets/Heroku%20Build%20info.png)

## Technologies
* JavaScript
* Webpack
* Express.js
* Heroku

## License
![badge](https://img.shields.io/badge/license-Open-brightgreen)

This application is covered by the Open license. 

## Author
Chris Holtz
Email choltz@cacbydesign.com to suggest an edit.

## Questions

* Chris Holtz
* ✉️ Email: choltz@cacbydesign.com
* GitHub Username: choltz@cacbydesign.com
* GitHub Profile: https://clearbusinessinsight.github.io/jate-text-editor/




 
