# Project Files 
The project files that are included and that will be discussed in my description and presentation video are the index, about_me, courses_taken, resume, and contact. These html files make up the entirety of my website and each file is a page of the website. 
The project also includes script.js and style.css. 

# Project Description 
I will go over my thought and design process for my website below. I will define the project file, and make note of any notable css properties I defiend, as well as any scripts I used/written. 

In all of these files, I used Open Sans from google fonts to style my fonts displayed in the website. 

In this project, I set out to create a resume/website portfolio where I would be able to tell the reader who I am, as well as showcase some of the web design features I learned from this course. 
For the design of this project, I looked to keep the overall look of the website very consise and simple. I didn't want to clutter the reader with information. To keep the look of the website consistent, I make the color theme red, black, and white. (BU colors)
# index.html
This page is the home page, and it contains a png image I created to fit the page on Adobe Illustrator. It also has headings that is styled in css. This is the page I started with, and used to start the design of the entire website. It should be noted that I used css flexbox on the navigation bar within css. Using flex, I was able to align the navigation bar horizontally with the BU logo. 

I also added a hover effect where there would be underlines under the links to the other pages, but taht would only show if the cursor hovered over them. 

# about_me.html 
On this page, I tried to separate my content, with a rather less intimidating picture of me on the left, which I also created to fit with this page on Adobe Illustrator. Within css, I rounded the corners of the image to allow the photo to fit more nicely on the page. Then, I put the about me content to the right of the page, with a short description below the header, and a sub navigation bar below that. I used the display block property to style this section on css. This sub navigation was designed in css and done in a similar way to the overall navigation bar. An underline also shows to tell the user which sub menu you are currently on. This functionality was added via Javascript. 
I made an onclick event handler that runs the openLink function whenever a sub menu is clicked on. 

# script.js
This script opens and closes the correct submenu window within the about me section. I retrieve the document object from its class name as the menu is clicked, and then I replace the current block that is showing with the block that has been clicked on. 

# courses_taken.html 
I use this page to showcase the courses I took during my graduate degree, and the things I learned and completed. I used the CSS grid layout to display each course and created a hover effect where the course would show a slight animation when the cursor would hover over the course. I also took some icons online and displayed it on each grid to enhance the look of each grid. I also added github links to some of the work I have done in some of the grids. I added icons to the links to also enhance the look of those links. 

# resume.html 
I mostly used vue to design this page as my header and button was created via Vue. within the button, I added a function that would open my resume within the same directory folder in a new window. 

# contact.html
This is the contact page where I used two columns, the one on the left to hold my contact information which also includes icons anyone can click on to be redirected on a new page to my github and linkedin profiles. I used flex to space my columns out in a nice looking way, and created a hover effect to my icons as well as submit button in css. I also used formsubmit.co to be able to send myself an email with the contact information upon clicking the submit button. The content is recorded on an external form on formsubmit and then submitted to my email.

