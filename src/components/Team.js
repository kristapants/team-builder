import React from 'react'
import TeamMembers from './TeamMembers'
import { v1 as uuidv1 } from 'uuid';


export default function Team(props) {
  const { about } = props

  if (!about) {
    return <h3>Working hard and fetching the team&apos;s details...</h3>
  }

  return (
    <div>
        {about.map(each => {
            return (
                <TeamMembers key={uuidv1()} aboutEach={each}/>
            )
        })}
    </div>
  )
}