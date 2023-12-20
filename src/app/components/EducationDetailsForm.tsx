"use client"

import { useCVInfo } from "../store/CVStore"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function EducationDetailsForm()
{
  const { school, degree, location, startDate, endDate, id } = useCVInfo(state => state.education)
  const educationInfo = useCVInfo(state => state.educationInfo)
  const setEducation = useCVInfo(state => state.setEducation)
  const setEducationInfo = useCVInfo(state => state.setEducationInfo)
  const addEducation = useCVInfo(state => state.addEducation)
  const createForm = useCVInfo(state => state.createForm)
  const setCreateForm = useCVInfo(state => state.setCreateForm)
  const handleClick = () =>
  {
    setCreateForm(true)
  }
  const addInfo = () =>
  {
    addEducation({ school, degree, location, startDate, endDate })
    setCreateForm(false)
  }

  const openForm = (id: string = "") =>
  {
    setCreateForm(true)
    const newInfo = educationInfo.find((education) => education.id === id)
    setEducation({ ...newInfo })
  }
  const deleteItem = (id: string = "") =>
  {
    const newInfo = educationInfo.filter(educacion => educacion.id !== id)
    setEducationInfo(newInfo)
    setCreateForm(false)

  }
  return (
    <div>
      <div>
        {educationInfo.map((education) => (
          <Button onClick={() => openForm(education.id)} key={education.id}>
            {education.school}
          </Button>
        ))}
      </div>
      <Button onClick={handleClick}>+ Education</Button>
      {createForm && (
        <>
          <div>
            <Label htmlFor="school">School</Label>
            <Input id="school" type="text" placeholder="UNAM" value={school} onChange={(e) => setEducation({ school: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="degree">Degree / Coursework</Label>
            <Input type="text" id="degree" placeholder="Licenciatura en Economia" value={degree} onChange={(e) => setEducation({ degree: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input type="text" id="startDate" placeholder="Agosto-2020" value={startDate} onChange={(e) => setEducation({ startDate: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="endDate">End Date</Label>
            <Input type="text" id="endDate" placeholder="Agosto-2023" value={endDate} onChange={(e) => setEducation({ endDate: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input type="text" id="location" placeholder="Cuernavaca, Morelos" value={location} onChange={(e) => setEducation({ location: e.target.value })} />
          </div>
          <Button onClick={() => setCreateForm(false)}>Cancel</Button>
          <Button onClick={addInfo}>Save</Button>
          <Button onClick={() => deleteItem(id)}>Delete</Button>
        </>
      )}
    </div>
  )
}
