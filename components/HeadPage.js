import Head from "next/head";

const HeadPage = ({ headTitle }) => {
    return (
        <Head>
            <title>{headTitle || "INSTAGRAM 2.0"}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default HeadPage;