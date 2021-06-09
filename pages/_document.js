import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Head>
                    <link rel="stylesheet" href="https://use.typekit.net/nyk0avx.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
