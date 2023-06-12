import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css';

export default function Wolverine() {
    return (<Layout>
        <Head>
            <title>Wolverine page</title>
        </Head>
        <h1>Wolverine</h1>
        <div>
            text
        </div>
        <Image
            src="/images/wolverine.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            className={utilStyles.borderCircle}
            alt="Wolverine"
        />
        <Link href="/">Back to home</Link>
    </Layout>);
}