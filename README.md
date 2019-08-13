# Friend-Finder
Friends Finder
Node and Express Servers

Friends Finder is an application that request the user to take a survey, and uses his or her responses to find the best friend match for the user out of all the list of previous users that already had submmited their information.

This application uses node.js and particulary express node package manager to receive the user responses (request), post them to an specific url route, and so then we can manipulate this request and then elaborate a response.


So, the user fills out the survey, the responses are used to elaborate an object, the request (obejct created )is sent to an api route, there (in the server), we take the request and push that to our array of objects (list of responses we have); and then use the request to find the best match for the user. Less difference in responses means better match.  

Important: Since this application works with the express node package manager. To run this code, install express npm.

This code has been deployed to heroku, example on how the page works at: 
https://app-friends-finder.herokuapp.com/


Developer: Ginna Campbell Technologies applied: Node.js