# My-Login-App
My Login App Documentation
Table of Contents
Introduction
1.1 Purpose of the Application
1.2 Technologies Used
Project Structure
2.1 Directory Hierarchy
2.2 Description of Key Files
Usage Instructions
3.1 Prerequisites
3.2 Installation
3.3 Running the Application
________________________________________
1. Introduction
1.1 Purpose of the Application
My Login App is a simple web application that demonstrates user login functionality. It allows users to input their credentials, simulates a backend authentication process, and redirects to a success page upon successful login.
1.2 Technologies Used
Frontend:
HTML5
CSS3
JavaScript
Backend:
Node.js
Express.js
________________________________________
2. Project Structure
2.1 Directory Hierarchy

my-login-app/
|-- backend.js
|-- index.html
|-- node_modules/
|-- public/
|   |-- success.html
|   |-- styles.css
|   |-- script.js
|-- server.js2.2 Description of Key Files
backend.js: Contains backend logic for the application.
index.html: Main HTML file with the login form and structure.
public/: Directory for static files served by the server.
public/success.html: HTML file displayed upon successful login.
public/styles.css: CSS file for styling the application.
public/script.js: JavaScript file for client-side logic.
server.js: Express server script handling routes and authentication.
________________________________________
3. Usage Instructions
3.1 Prerequisites
Ensure you have Node.js installed on your machine.
3.2 Installation
Clone the repository: 
Navigate to the project directory: cd my-login-app
Install dependencies: npm install
3.3 Running the Application
Start the server: node server.js
Access the application in your browser: http://localhost:3000

