import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default function AddMember(props) {
  const { aboutEach } = props

  if (!aboutEach) {
    return <h3>Working hard and fetching the team&apos;s details...</h3>
  }

  return (
    <div >
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: '10px' }}>
            <CardBody>
                <CardTitle style={{ fontWeight:'bold'}}>{aboutEach.fName} {aboutEach.lName}</CardTitle>
                <CardText>{aboutEach.fName} works with us in the role of {aboutEach.jobTitle}. Ask them about their special skill, {aboutEach.specialSkill}!</CardText>
            </CardBody>
        </Card>
    </div>
  )

}