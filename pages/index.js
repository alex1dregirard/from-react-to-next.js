import Link from 'next/link';
import { useState } from 'react';
import { getSortedCharactersData } from '../lib/characters';
import Layout from '../components/layout';

/**
 * Display a title if it exists, otherwise display a tiger emoji
 * @param {*} title 
 * @returns 
 */
function createTitle(title) {
    if (title) {
        return title;
    } else {
        return '🐯';
    }
}

/**
 *  Header component
 * @param {*} title 
 * @returns 
 */
function Header({ title }) {
    return <h1>Hello {createTitle(title)}</h1>
}

/**
 *  Home page component
 * @param {*} param0 
 * @returns 
 */
export default function HomePage({ allCharactersData }) {
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        console.log('increment like count');
        setLikes(likes + 1);
    }

    return (
        <Layout>
        <div id="HomePage">
            <Header title="🐶" />
            <h2>Characters</h2>
            <ul>
                {allCharactersData.map((character) => (
                    <li key={character.id}><Link href={"/characters/" + character.id }>{character.name}</Link></li>
                ))}
            </ul>
            <p>Number of characters returned: {allCharactersData.length}</p>
            <button onClick={handleClick}>Like {likes}</button>
        </div>
        </Layout>
    );
}

/**
 * Get all characters data sorted by name
 * @returns 
 */
export async function getStaticProps() {
    const allCharactersData = getSortedCharactersData();
    return {
        props: {
            allCharactersData,
        },
    };
}

