# IowaPen pen collectors club website

IowaPen is a pen collectors club, a gathering of people interested in fountain pens, mechanical pencils, and writing instruments of all kinds. 
Calligraphy, penmanship, pen collecting, vintage pen restoration, nib tuning, ink testing/sharing, paper, pen turning, history and more.

This website is printed on our business card used to provide information to interested people, and service as a hub for all information about 
our club, our club chapter meeting dates, and links to our various social media sites, local chapterer contacts and links to regional pen stores,
pen shows, and more.  It's been a static page up until now, but the free hosting vendor was so worthless that it was too much of a hassle to keep
running.  I recently found out about GitHub pages. The web site will be hosted on GitHub as https://iowapen.github.io, and once in a useful state, it will
also be on the domain name we have purchased (https://iowapen.club and https://iowapen.com)

We'd also like to eventually host a blog (perhaps in a later module of the Full Stack Developer course, as it's mention in the curriculum) 
and a user discussion forum

To access this source code:

- git remote add origin https://github.com/IowaPen/iowapen.github.io.git
- git push -u origin master



## UX
 
Use this section to provide insight into your UX process, 
focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

The visual elements of the page are designed to resemble writing, especially the writing with ink shading of fountain pens (through the use of radial and 
linear gradients).  The menu buttons also resemble ink shading and "sheen", as well as resemble ink sample swatches very commonly used by ink vendors, 
stores and enthusiasts to catalog and show their ink colors and collections.  Eventually I might replace the backgrounds with ACTUAL ink swatches. 

### Who this website is for:

Members of IowaPen or other people interested in writing instruments, ink, paper - there are quite a lot more than you think! I will both provide information 
for our members and help new members find us. 

### What they want to achieve when they visit

- Find out how to contact us
- Find our meeting dates, times and locations
- Find our social media sites
- Find other resources related to the hobby; these resources are fragmented all around the web and I'd like to eventually provide a single resources for many of them, sort of the IMDB of writing instruments

### The best way to help them achieve these things
A web site is accessible to anyone.  Not everyone uses Facebook, Twitter, and other social media and never will.   We need a free and open place
on the Internet for anyone to be able to access information about our club, at any time, with most any device. 

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

### User Stories

- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
In looking over the course syllabus/schedule, I can see opportunuties to implment many of these as part of other course major projects (or on my own as I learn the necessary skills in the course, as seems appropriate.)

- Make menu background actual ink sample swatches instead of color gradients
- As I continue through the course there are areas I will either implement myself or through a third party tool, as seems appropriate
    - Pen / Ink / Writing quotes (as part of the course that covers using databases) - I already have a large quotation list
    - Blog (implement own, use third party such as WordPress, Blogger, etc)
    - Discussion Forum (implement own or use third party)
    - Pen Club database (as opposed to simple list, allow update submission)
    - Pen Show database (as opposed to simple list, allow update submission)
    - Pen Store list (online and bricks-and-mortar)
    - Pen Publication list
    - Pen Vendor list
    - Ink Vendor list
    - Paper vendor list
    
    FUTURE - Pen version of IMDB 
    - Nicer, more real-life event calendar with club events, pen shows, other related events
    - Pen databases
        - Pen companies
        - Pen models (fountain pen, ballpoint, rollerball, gel, mechanical pencil, etc)
        - Pen photos
        - Pen reviews
    - Ink databases
        - Ink vendors
        - Ink brands/lines
        - Ink reviews
        - Ink sample images 
    - Paper databases
        - Paper vendors
        - Paper branks/lines
            - Esp fountain pen friendly or UN-friendly
        - Paper reviews
    - Pen Show calendar and links
    - Pen Store links
    - Pen Club links
    - Pen book links 
    - Pen publication (magazine) links

    - Many of these could show advertisements as well, to fund the site and perhaps be turned into a business or several businesses. 
         
    
## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [Bootstrap JS framework](https://getbootstrap.com/)

- [Google Fonts](https://fonts.google.com/)
    
- [FontAwesome icons](https://fontawesome.com)

- [Hover.css](https://ianlunn.github.io/Hover/)




## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

- The basic structure for the site was inspired by the UCD Resume mini project in the CodeInstitute.Net Full Stack Developer Course.


### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X

