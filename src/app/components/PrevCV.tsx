"use client"
import React from 'react'
import { useCVInfo } from '../store/CVStore'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styleSheet = StyleSheet.create({
  section: {
    backgroundColor: "rgb(30 58 138)",
    height: 160,
    textAlign: "center",
    padding: 16
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 20,
    margin: 8,
    fontWeight: 700
  },
  sectionPersonal: {
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
    padding: 8,
    fontSize: 20
  }
  ,
  sectionTitle: {
    backgroundColor: "rgb(212 212 216)",
    margin: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 24,
    padding: 8,
    color: "hsl(var(--primary))",
    fontWeight: 600
  },
  sectionDiv: {
    color: "black",
    display: "flex",
    gap: 20,
    justifyContent: 'center',
    paddingLeft: "1.5rem"/* 24px */,
    paddingRight: "1.5rem",
    marginTop: "1rem"/* 16px */,
    marginBottom: "1rem"
  }
})

export const PrevCV = () =>
{
  const { fullname, email, address, phoneNumber } = useCVInfo((state) => state.personalInfo)
  const educationInfo = useCVInfo(state => state.educationInfo)
  const experienceInfo = useCVInfo(state => state.experienceInfo)
  return (
    <Document>
      <Page size={'A4'}>
        <View style={styleSheet.section}>
          <Text style={styleSheet.title}>{fullname}</Text>
          <View style={styleSheet.sectionPersonal}>
            <Text>{email}</Text>
            <Text>{phoneNumber}</Text>
          </View>
          <Text style={{ padding: 8 }}>
            {address}
          </Text>
        </View>
        <View>
          <View style={styleSheet.sectionTitle}>
            <Text>Education</Text>
          </View>
          <View>
            {educationInfo.map((education) => (
              <View style={styleSheet.sectionDiv} key={education.id}>
                <View>
                  <Text>
                    {education.startDate} - {education.endDate}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>
                    {education.school}
                  </Text>
                  <Text>
                    {education.degree}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          <View style={styleSheet.sectionTitle}>
            <h1>Experiences</h1>
          </View>
          <View>
            {experienceInfo.map((experience) => (
              <View style={styleSheet.sectionDiv} key={experience.id}>
                <View>
                  <Text>{experience.startDate} - {experience.endDate}</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>
                    {experience.company}
                  </Text>
                  <Text>
                    {experience.position}
                  </Text>
                  {experience.description && <Text>{experience.description}</Text>}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}
