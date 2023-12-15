import { Metadata } from "next"
import Form from "./components/Form"

export const metadata: Metadata = {
  title: "CV - Generator"
}


export default function Home()
{
  return (
    <main className="h-screen">
      <Form />
    </main>
  )
}
