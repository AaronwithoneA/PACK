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
