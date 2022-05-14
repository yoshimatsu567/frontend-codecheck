import React from 'react';

import Head from 'next/head';

const HeadContainer: () => JSX.Element = () => {
    return (
        <Head>
            <title>県別の総人口推移表示するアプリ</title>
            <meta name='description' content='県別の総人口推移表示するアプリ' />
            <link rel='icon' href='/favicon.png' />
        </Head>
    );
};

export default HeadContainer;
