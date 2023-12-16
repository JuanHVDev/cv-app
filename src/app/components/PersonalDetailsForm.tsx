"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCVInfo } from '../store/CVStore'

export default function PersonalDetailsForm()
{
  const { fullname, email, address, phoneNumber } = useCVInfo(state => state.personalInfo)
  const setPersonalInfo = useCVInfo(state => state.setPersonalInfo)
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="fullName" className="text-xl">Full Name:</Label>
        <Input id="fullName" type="text" placeholder="Juan Herrera Vázquez" value={fullname} onChange={(e) => setPersonalInfo({ fullname: e.target.value })} required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-xl">Email:</Label>
        <Input id="email" type="email" placeholder="juan@gmail.com" value={email} onChange={(e) => setPersonalInfo({ email: e.target.value })} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone" className="text-xl">Phone:</Label>
        <Input id="phone" type="tel" placeholder="5524831597" value={phoneNumber} onChange={(e) => setPersonalInfo({ phoneNumber: e.target.value })} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="address" className="text-xl">Address:</Label>
        <Input id="address" type="text" placeholder="Ciudad de México, Mx" value={address} onChange={(e) => setPersonalInfo({ address: e.target.value })} />
      </div>
    </div>
  )
}
