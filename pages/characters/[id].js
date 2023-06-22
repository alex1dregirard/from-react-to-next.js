import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllCharactersIds, getCharacter } from '../../lib/characters';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Date from '../../components/date';
import PieChart from '../../components/pie-chart';

export default function Character({ character }) {
    console.log(character)
    const data = [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }];
    return (
        <Layout>
            <Head>
                <title>{character.name} page</title>
            </Head>
            <h1>{character.name}</h1>
            <h2><Date dateString={character.modified} /></h2>
            <p>
                {character.description}
            </p>
            <table >
                <thead>
                    <tr>
                        <th>Comics</th>
                        <th>Series</th>
                        <th>Stories</th>
                        <th>Events</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{character.comics?.available}</td>
                        <td>{character.series?.available}</td>
                        <td>{character.stories?.available}</td>
                        <td>{character.events?.available}</td>
                    </tr>

                </tbody>
            </table>

            {character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && (
                <Image
                    src={character.thumbnail.path + '/standard_large' + '.' + character.thumbnail.extension} // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    className={utilStyles.borderCircle}
                    alt={character.name}
                />
            )}

            <Link href="/">Back to home</Link>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const character = getCharacter(params.id);
    console.log(character)
    return {
        props: {
            character,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllCharactersIds();
    paths.pop()
    return {
        paths,
        fallback: true,
    };
}