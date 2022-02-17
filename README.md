# js1-ma3-api

####//TO DO:
**change project name to:** _silje-angelvik-js1-ca_  
**to do:** _this_  
**to do:** _this_  

#JavaScript 1
#Course Assignment
##Level 1 Process

###index.html
~~Make a call to your API URL.~~   
~~Loop through the results,~~  
~~and create HTML for each result.~~  
~~You must display at least **3** different~~  
~~`properties` inside the HTML.~~     
~~It's not required to display an image.~~  
~~You will need to link each result to a details.html page,~~   
~~and to pass a parameter in the query string to that page.~~

`properties:`  
1. agent name  
2. agent role  
3. agent icon/image  

###index.html, cont.
~~If you are going to fetch the individual   
result on the details page by its id,   
then pass an id in the query string.~~  
~~If you will be retrieving by another property,     
like name for example, pass the name in the query string.  
You will fetch this parameter from the   
query string in the details page code.~~  
~~Catch any errors and display a message on  
the page if an error occurs.~~

###details.html
~~(**Remember**, you will need a parameter   
in the query string on this page, so   
either click through to it from the index page   
or manually add a parameter to the URL).  
Retrieve the id, name or other   
parameter from the query string.  
Once you have the parameter, add it to   
the API URL in the format the API requires.  
Make an API call using the URL you create~~

###details.html, cont.
Display at least 3 different properties   
from the received JSON on this page.  
Set the title of the HTML page to be one   
of the property values, like name, title   
or another relevant property.  
Catch any errors and display a message   
on the page if an error occurs  

`properties:` **8**  
`agent` .               name + image + description  
`agent` . `role`    .   name + description  
`agent` . `ability` .   name + image + description  



###contact.html
Create a form with the following   
inputs and validation rules.  
**Name** - required    
**Subject** - must have a value with a minimum length of 10  
**Email** - must have a value and be formatted like an email address  
**Address** - must have a value with a minimum length of 25  

When the form on this page is submitted,   
write code to validate the input.   
If any of the inputs fail validation   
display an error message for the relevant input.  


##Level 2 Process
###contact.html
If all validation passes,   
add a message above the form   
indicating the form passed validation  

##Information
###Rules
Sharing APIs and copying and sharing of   
any code will result in your assignment   
being given a mark of zero.  
You may only use plain JavaScript for   
this assignment, no libraries or frameworks.   
You will be given a mark of zero if you use   
a library or framework for your JavaScript code.  

##Submission
Create a folder called your-name-js1-ca,  
e.g. mary-smith-js1-ca   
(or use the folder from the GitHub Classroom repo)  
Add all your code to this folder,   
zip the folder and submit the zip file  

##Rubrik
###Index page:    
####Looping through and rendering the results of an API call (30%)
Can apply knowledge of JavaScript,     
and the DOM to develop dynamic solutions,  
and influence the structure of HTML document

###Details page:    
####Updating the DOM with the result of retrieving a specific item via an API call (30%)
Can apply knowledge of JavaScript,   
and the DOM to develop dynamic solutions,   
and influence the structure of HTML document


##Rubrik, cont.
###Contact page:    
####Validating form input using string methods and events (30%)
Can develop simple, 
relevant interactive solutions 
with JavaScript events
Error-free (10%)  
Can apply industry-relevant tools,  
and techniques for testing and    
troubleshooting source code




##Resources:  
* [Valorant API](https://valorant-api.com/)
* [Logo](https://seeklogo.com/vector-logo/379976/valorant)
* Loader


