import { Intro } from "./page_components/intro";
import { Guests } from "./page_components/guests";
import { About } from "./page_components/about";
export const HomePage = () => {
    return (
        <>
            <Intro />
            <Guests/>
            <About/>
        </>
    );
}