#PACK
[Github Link][github]
[github]: https://aaronwithonea.github.io/PACK

PACK  is a dog themed implementation of the classic card game SET.  The goal of the game is to identify packs(sets) of 3 dogs that are either all the same or all different across 3 attributes:

Size (small, medium or large)
Coloring (dark, light, or mixed)
Position (sitting, standing, or laying down)

There are a total of 12 cards and the game is won after identifying 4 packs.  

##How the Game was Built

The game is built on matching logic that waits for three dogs to be selected and then determines whether the match
is correct by progressively comparing each attribute across the three dogs.  The styling and responsive design of the game were achieved through use of CSS flex box, as well as CSS filters, transformations, and hover effects.  

![images](images/gae_photo.png)

The game additionally includes detailed verbal and visual instructions on gameplay
in a React modal.  

![images](images/modal.png)

###Dwellings

On the backend, dwellings are stored in the database with columns for id, owner_id, location, price, image_url, about_this, description, guest_limit, bedrooms, beds, and house_rules.

Dwelling index items are rendered in /home in the dwelling index within the search component.  Each item displays the image, location, and price and links to the dwelling show page.
The dwelling component renders all information about the dwelling and reviews.

####Dwelling Component

![image of dwelling](app/assets/images/dwelling_component.png)

###Dwelling search

There is an active search bar on /home that allows for search by maximum price and location.  The dwellings will responsively match selected filter.

####Search Component
![image of search](app/assets/images/search_component)
<img src="app/assets/images/search_componentpng">

###Bookings

Logged in users can book dwellings for specific dates and number of guests by making bookings which are stored in the database. Bookings have columns for user_id, dwelling_id, guest_number, start_date, and end_date. Dwellings restrict their availability based on associated bookings.
Bookings are rendered in /bookings and filtered for the logged in user who can view and cancel their bookings.

####Bookings index
![image of bookings](app/assets/images/booking_component)

###Reviews

Logged in users can leave reviews for dwellings. Reviews are stored in the database with a user_id, dwelling_id, body, and rating.
Reviews are rendered in the reviews component within the associated dwelling component.

####Reviews
![image of reviews](app/assets/images/review_component)


###Dwelling creation
Logged in users can create new dwelling listings under the "Become a Host" button on the navbar.  The dwelling creation form includes
input fields for all information rendered in the dwelling component, including image upload.

![image of dwelling creation](app/assets/images/dwelling_creation)
