# Marvin the Paranoid Android chat bot

# As part of my 10 week Javascript class I have been assigned to create a chabot that does the following:

- Have the AI respond to user input
- Do at least 3 different things
- One of the commands must utilize the list of people in the class to send a reply
- Use at least 1 conditional to change the response
- Leverage a for loop to iterate over a collection
- Use a random component
- Go above and beyond simple `if/else` statements

# What Marvin does

- Marvin asks for your name. By default, Marvin will randomize through an array of characters from H2G2.
  - User can choose between entering a name or using the default.
  - In either case, the user's name will display in the user's chatbox and Marvin will print a welcome message to the user.
- Using an event listener on the input form and Marvin gets the user input and saves it to a variable.

  - as part of the submit event Marvin checks the user input against an array containing keywords for pre-programmed responses.
  - if the user input conatins any of the keywords Marvin will respond with a pre-programmed response.
  - else it returns a randomized reponse from the random response array.
  - included an 'event' function in the event listener to prevent the [enter] key refreshing the page when pressed.

- Using HTML option, I've included a dropdown list for users to see available keywords

# How Marvin looks:

- Marvin's background is a solid color with a transparent PNG of Marvin found on google. Used fonts.google.com for font changes.
