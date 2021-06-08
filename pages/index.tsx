import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="m-0 text-7xl text-center my-3 font-bold">
          Welcome to{" "}
          <a
            href="https://nextjs.org"
            className="text-blue-500 no-underline hover:underline focus:underline active:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-center text-2xl my-4">
          Get started by editing{` `}
          <code className="bg-gray-100 rounded p-3 text-lg font-mono">
            pages/index.tsx
          </code>
        </p>

        <p className="text-center text-2xl my-4">
          This is not an official starter!
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-3xl mt-12 w-full ">
          <a
            href="https://nextjs.org/docs"
            className="m-4 flex-auto w-4/5 sm:w-2/5 p-6 text-left no-underline border border-solid border-gray-200 rounded-lg transition ease-linear hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
          >
            <h3 className="mb-4 text-2xl font-bold">Documentation &rarr;</h3>
            <p className="text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 flex-auto w-4/5 sm:w-2/5 p-6 text-left no-underline border border-solid border-gray-200 rounded-lg transition ease-linear hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
          >
            <h3 className="mb-4 text-2xl font-bold">Learn &rarr;</h3>
            <p className="text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="m-4 flex-auto w-4/5 sm:w-2/5 p-6 text-left no-underline border border-solid border-gray-200 rounded-lg transition ease-linear hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
          >
            <h3 className="mb-4 text-2xl font-bold">Examples &rarr;</h3>
            <p className="text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new"
            className="m-4 flex-auto w-4/5 sm:w-2/5 p-6 text-left no-underline border border-solid border-gray-200 rounded-lg transition ease-linear hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-500 focus:border-blue-500 active:border-blue-500"
          >
            <h3 className="mb-4 text-2xl font-bold">Deploy &rarr;</h3>
            <p className="text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-24 border-t border-solid border-gray-200 flex justify-center items-center">
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          Powered by{` `}
          <div className="flex justify-center items-center ml-2">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width="70px"
              height="16px"
            />
          </div>
        </a>
      </footer>
    </div>
  );
}
