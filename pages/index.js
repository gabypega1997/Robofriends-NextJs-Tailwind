import Link from "next/link";
import Image from "../component/Image";

const Index = () => (
        <div>
            <h1>SSR Magician</h1>
            <Link href="/about">
                <button>About</button>
            </Link>
            <Link href="/robots">
                <button>Robots</button>
            </Link>
            <Image></Image>
        </div>
);

export default Index