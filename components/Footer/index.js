import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S BUILD
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              SOMETHING COOL
            </h1>
            <Button type="primary" onClick={() => window.open("mailto:swlerdahl@gmail.com")}>Drop me a note.</Button>             <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
