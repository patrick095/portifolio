import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import PageDefault from "../components/pageDefault";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PageDefault>
            <SpeedInsights/>
            <Analytics/>
            <Component {...pageProps} />
        </PageDefault>
    );
}
export default MyApp;
