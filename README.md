# **UFO Sightings: An Analysis using Javascript**
## **Overview of the analysis**
### *Purpose*
The purpose of this analysis was to build a dynamic website using Javascript to showcase data concerning UFO sightings across the United States. The main feature of the website would be a search engine that would allow users to filter the site's record table according to a specific date, city, state, country and UFO shape. 

## **Results**
### *How does the website work?*
In reality, the website works in a very simple manner. Upon entering the site (which can be viewed through the following domain: https://rrantxa.github.io/UFOs/), the first thing you'll notice is a general description of the project, which is to showcase relevant data concerning UFO sightings. 

![readme_1](https://user-images.githubusercontent.com/113153777/211241535-865f123a-0fd8-4b91-ba75-3d7a457f4619.png)

Below the general description, the table containing sighting data can be found. This table holds a large amount of records which might be difficult to inspect all at once, however, the website contains a feature that allows users to filter the table according to the type of event they'd like to know more about. 

![readme_2](https://user-images.githubusercontent.com/113153777/211241566-ed840bd3-18f7-4968-b656-9d8fc7b10e70.png)

As the above image shows, the table can be filtered according to the following criteria:
* Date
* City
* State
* Country
* UFO Shape

Thus, users can enter the data they're interested in analyzing, and the table will get automatically updated (that is, if the user entered valid search criteria). An example of this would be a search for UFO sightings in California in the form of light during the first of January 2010. This search gives us a total of 7 entries, as the following image displays: 

![readme_3](https://user-images.githubusercontent.com/113153777/211241598-20f3b258-1554-4362-acf2-476b26ce249f.png)

Finally, if users wish to display the full table once again, they can simply remove all the information they entered on the search engine, or refresh the website. 

## **Summary**
### *How can the website be improved?*
The website is a very interesting excercise that allows users to examine UFO sighting data on their own. However, the site can be improved upon in different ways. 

### **Drawbacks**
1. One drawback of the website concerns the manner in which data is displayed. It is certainly not ideal that the full table of data gets displayed each time a user enters the website, as it is not visually harmonious. This could be solved if the table was to be displayed in the form of multiple pages or records. 
2. Another important drawback concerns the search engine itself, as users don't have a guide of what could be the possible search criteria. Additionally, the data only gets filtered if the user's input exactly matches the information on the table, which could be a problem in the long run.

### **Recommendations**
1. Modifying the app.js file and the index.html file to allow the table data to be displayed in multiple pages or as a set of separate records. This would be a better way of displaying the data in general. 
2. Modifying the search engine so that users can get a dropdown menu for each of the possible search filters. This would avoid any errors in spelling, for example. 
3. Incorporating a "Clean Filters" button so that users can display the full data again after a search. 
