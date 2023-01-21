import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

export default function h3({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-fit md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
     hover:opacity-100 opacity-40 cursor-pointer transition-opacity
     duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
          }}
        >
          <h4 className="xl:text-3xl text-xl font-light">MAGNET FORENSICS</h4>
          <p className="font-bold text-lg xl:text-xl mt-1">
            SOFTWARE DEVELOPER CO-OP
          </p>
        </motion.div>

        <div className="flex space-x-2 my-2">
          <Image
            src="https://camo.githubusercontent.com/a711ed391245ae8ba4dc9935a8015dbc03f9632a884f2ef028cab7b8b79bd689/68747470733a2f2f74682e62696e672e636f6d2f74682f69642f522e33363061306566343636366463626264363264393739653731303062346136643f72696b3d5948637a67384e43586e35356551267069643d496d6752617726723d30"
            alt=""
            height={40}
            width={40}
          />
          <Image
            src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
            alt=""
            height={40}
            width={40}
          />
          <Image
            src="https://camo.githubusercontent.com/03299569e7e125fe4894cb8a7b0ee072c5b158a17da8970b787f78165a07b2ed/68747470733a2f2f74682e62696e672e636f6d2f74682f69642f4f49502e6a6456316f467a4a577859634a727156513333614b51486148613f7069643d496d6744657426773d35313226683d3531322672733d31"
            alt=""
            height={40}
            width={40}
          />
          <Image
            src="https://camo.githubusercontent.com/dd7322be916cd8d694e6abeafdb0ee36db0292c28f4462b049d053610281085c/68747470733a2f2f69636f6e6170652e636f6d2f77702d636f6e74656e742f66696c65732f616e2f3335313534362f706e672f7461696c77696e642d6373732d6c6f676f2e706e67"
            alt=""
            height={40}
            width={40}
          />
        </div>
        <p className="text-sm xl:text-base uppercase py-7 text-gray-300">
          Started work... - Ended...
        </p>
        <ul
          className="text-base list-disc space-y-2 ml-0 h-56 overflow-y-scroll overflow-x-hidden 
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        >
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
}
