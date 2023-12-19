import { Metadata } from "next"
import FormComplete from "./components/FormComplete"
import { PrevCV } from "./components/PrevCV"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "CV - Generator"
}


export default function Home()
{
  return (
    <main className="h-full md:flex md:flex-row flex flex-col justify-center gap-10">
      <section className="mx-20">
        <FormComplete />
      </section>
      <section className="h-screen bg-white  sm:w-[600px] md:w-[750px] w-[350px] mx-auto">
        <Suspense fallback={<div className="animate-spin h-8 w-8 mx-auto"></div>}>
          <PrevCV />
        </Suspense>
      </section>
    </main>
  )
}
