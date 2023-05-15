# tic-tac-toe

[//]: # (basic thoughts about how you solved the assignment.)
Ik heb de opdracht opgedeeld in 2 delen. Als eerste heb ik de front-end gemaakt en daarna de back-end. Ik heb de
front-end gemaakt met React en de back-end met NodeJS. Ik heb de front-end en back-end gescheiden gehouden. De
front-end is te vinden in de map `front-end` en de back-end in de map `server`.

Ik heb de front-end eerste gemaakt, omdat dit het hoofdonderdeel is van de opdracht. De front-end heb ik eerst
opgedeeld in componenten. Ik heb de componenten `TicTacToe`, `Game`, `Grid` en `Block` gemaakt. De `TicTacToe`
component is de hoofdcomponent. Deze component bevat de `Game` component. De `Game` component maakt de `Grid` aan met 
behulp van het Block component. In de Game component heb ik de spellogica geschreven. Daarin check of er een winnaar 
is en of het spel gelijkspel is. 

Vervolgens heb ik de back-end gemaakt met NodeJS. Ik heb een RESTful API gemaakt met behulp van de express bibliotheek.
Ik heb endpoints gemaakt voor het opslaan van de speltoestand. Ik heb ook een eenvoudige database
gebruikt om de speltoestand op te slaan.

Tot slot heb ik ervoor gezorgd dat de front-end en back-end met elkaar kunnen communiceren door gebruik te maken 
van de fetch API. 
Ik heb ervoor gezorgd dat de front-end gegevens naar de back-end kan sturen.

Al met al was het een leuke opdracht om te maken. Ik heb geprobeerd om de code schoon te houden.
