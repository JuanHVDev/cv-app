"use client"

import { Button } from "@/components/ui/button"
import { useCVInfo } from "../store/CVStore"

export default function Buttons()
{
  const loadExample = useCVInfo(state => state.loadExample)
  const clearInfo = useCVInfo(state => state.clear)
  return (
    <>
      <Button className='p-4 mx-5' onClick={() => clearInfo()}>
        Clear
      </Button>
      <Button className='p-4' onClick={() => loadExample()}>
        Load Example
      </Button>
    </>
  )
}
