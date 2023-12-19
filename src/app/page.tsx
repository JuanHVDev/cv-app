import { Metadata } from "next"
import FormComplete from "./components/FormComplete"
import { PrevCV } from "./components/PrevCV"
import { Suspense } from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PDFDownload from "./components/PDFDownload"

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
        <PDFDownload />
      </section>
    </main>
  )
}
