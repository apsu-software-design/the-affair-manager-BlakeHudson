# The Affair Manager

This repo contains code for a command-line application to manage events (called "affairs" in the code), created as part of an assignment for CSCI 4602 at Austin Peay State University.

The below questions should be answered _in detail_ regarding your submission!

##### Reflect on how you determined the architecture of your application. What process did you use to determine which classes to define? #####
> At first I just had three classes: Member, Organization, and Affair. Then as the code got more complex I rethought my architecture and used the nouns of the program to define addiontal classes.

##### Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> No classmate help, just typescript documentation and geeksforgeeks


##### Approximately how many hours did it take you to complete this assignment? #####
> Due to picking a poor design at the beginning, it took me 10 hours of total time


##### On a scale of 1 (too easy) to 10 (too challenging), how difficult was this assignment? #####
> This would have been a very easy assignment in a more robust language, but the learning curve I am still facing with TypeScript made it a 7.


##### Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> When a query returns no results after searching for an affair, the program crashes because the ui tries to call getMembers without a valid object.

