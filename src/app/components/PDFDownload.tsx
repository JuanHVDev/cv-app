"use client"

import { PDFDownloadLink } from "@react-pdf/renderer"
import { PrevCV } from "./PrevCV"

export default function PDFDownload()
{
  return (
    <PDFDownloadLink document={<PrevCV />} fileName="cv.pdf">
      {({ blob, url, loading, error }) => loading ? (<button>Loading Document</button>) : (<button>Download CV</button>)}
    </PDFDownloadLink>
  )
}
