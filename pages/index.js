import Link from 'next/link';
import { useState } from 'react';
import { getSortedCharactersData } from '../lib/characters';

function createTitle(title) {
    if (title) {
        return title;
    } else {
        return '🐯';
    }
}

function Header({ title }) {
    return <h1>Hello {createTitle(title)}</h1>
}


export default function HomePage({ allCharactersData }) {
    const [likes, setLikes] = useState(0);
    const names = ['Wolverine', 'Elon', 'Jeff', 'Bill'];

    function handleClick() {
        console.log('increment like count');
        setLikes(likes + 1);
    }

    return (
        <div id="HomePage">
            <Header title="🐶" />
            <ul>
                {allCharactersData.map((character) => (
                    <li key={character.name}>{character.name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like {likes}</button>
            <Link href="/characters/wolverine">Wolverine</Link>
        </div>
    );
}

export async function getStaticProps() {
    const allCharactersData = getSortedCharactersData();
    return {
        props: {
            allCharactersData,
        },
    };
}

