# Train_schedule

GETTING STARTED:



Please find my page at: https://dartanianbagby1.github.io/Train_schedule/.


a. This project was a simple app implemented with HTML, css,JQuery,moment.js, and Firebase the app is an interface where the user can interface with a train schedule.

b. The user can enter data such as , the trains name , the trains destination,  the trains first arrival time of the  day, and the frequency with which the train runs.

.c Once the user ckicks the submit button,  the data is stored in a database, and used to populate the accompanying shedule with the new information

.d The application takes the arrival of the first train and the frequency of the train's arrival times and uses the data to predict how long it will be before the next train arrives by running a comparison btween the present time and a landmark time from 01/01/1970, and calculating the difference between the two in order find the exact time of calculation, then dividing the differrence of the first train time of the day and the present time by the frequency of the train's arrival times for the day and using any remainder from that calculation to subtract time from the frequency value, thereby obtianing  an prediction for the "minutes until next arrival", next arrival time.

Prerequisites: there are none, the app can be used on any modern browser with no additional software.

Installation: None needed.

Testing: There is none needed by the user.

Built With: HTML javascript and css

Version Control: Git Hub was used for version control.

Author: John Dartanian Bagby

Licences: This project is licenced by Bagby inc. for public use.

Acknowledgements: All the team at UCLA.Bootcamp for their support.
