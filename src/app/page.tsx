import { Metadata } from "next"
import FormComplete from "./components/FormComplete"

export const metadata: Metadata = {
  title: "CV - Generator"
}


export default function Home()
{
  return (
    <main className="h-screen">
      <FormComplete />
    </main>
  )
}
