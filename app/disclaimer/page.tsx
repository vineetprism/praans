import { Metadata } from "next"
import Disclaimer from "../_component/Disclaimer/Disclaimer"

export const metadata: Metadata = {
  title: "Disclaimer | Praans Consultech",
  description:
    "Read our disclaimer to understand the limitations of liability and the accuracy of the information provided on our website.",
  keywords: "disclaimer praans consultech, labour law disclaimer, statutory registration disclaimer",
}

export default function Page() {
  return (
    <Disclaimer />
  )
}