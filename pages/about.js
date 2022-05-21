import Image from "../component/Image.js";
import Link from "next/dist/client/link";

const About = () => {
    return(
        <div>
            <h1>
                About
            </h1>
            <Image/>
            <Link href="/">
                <button>Back</button>
            </Link>
        </div>
    );
}

export default About;