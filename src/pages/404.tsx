import Image from "next/image";
import Link from "next/link";

const Custom404Page = () => (
  <div className="columns is-centered is-mobile">
    <div className="column is-half">
      <Image layout="responsive" width={100} height={100} src="/rick-roll.gif"></Image>
      <h1 className="title is-1">Oopsie! Looks like the website broke.</h1>
      <h2 className="title is-6">
        We promise that some developer somewhere is going 🍌 right now!
      </h2>
      <span className="button is-primary">
        <Link href="/">
          <strong>Go Home &rarr;</strong>
        </Link>
      </span>
    </div>
  </div>
);

export default Custom404Page;
