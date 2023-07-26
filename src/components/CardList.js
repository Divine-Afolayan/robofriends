import React from 'react';
import Card from './Card'; // importing Card from Card.js

const CardList = ({ robots }) => { // robots can be accesed like this because CardList has robots as a prop
    if (false) { // Try making it false
        throw new Error('NOOOOOOOOOO!');
    }
    return (
        <div>
            {
                robots.map((users, i) => {
                    return (
                        <Card
                            key={i} // When doing loops each value must have a specific key. In our case, it is i
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div> // We are writing JavaScript so it has to be in curly braces
    );
}

export default CardList; // exporting cardList