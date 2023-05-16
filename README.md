# tic-tac-toe

Ik heb de opdracht opgedeeld in 2 delen. Als eerste heb ik de front-end gemaakt en daarna de back-end. Ik heb de
front-end gemaakt met React en de back-end met NodeJS en express. Ik heb de front-end en back-end gescheiden 
gehouden. De front-end is te vinden in de map `front-end` en de back-end in de map `server`.

Ik heb de front-end eerste gemaakt, omdat dit het hoofdonderdeel is van de opdracht. De front-end heb ik eerst
opgedeeld in componenten. Ik heb de componenten `TicTacToe`, `Grid` en `Block` gemaakt. Eerst had de Grid te veel logica en voldeed niet aan SOLID. Daarna heb ik de code 
gerefactord. Ik heb daardoor de `Game` component aangemaakt. De `Game` bevat nu het spel logica en de `Grid` 
component maakt nu alleen maar het grid aan met de `Block` component.


Vervolgens heb ik de back-end gemaakt met NodeJS. Ik heb een RESTful API gemaakt met behulp van de express bibliotheek.
Ik heb endpoints gemaakt voor het opslaan van de speltoestand. Ik heb ook een eenvoudige database
gebruikt om de board state op te slaan.

Tot slot heb ik ervoor gezorgd dat de front-end en back-end met elkaar kunnen communiceren door gebruik te maken 
van de fetch-API om de score op te slaan in een database.

Al met al was het een leuke opdracht om te maken. Ik heb geprobeerd om de code schoon te houden.
