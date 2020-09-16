import { v4 as uuid } from 'uuid'

const initialTeammates = [
  {
    id: uuid(),
    fName: 'Fastidious',
    lName: 'Jones',
    jobTitle: 'butterfly collector',
    specialSkill: 'karate',
  },
  {
    id: uuid(),
    fName: 'Ashlyn',
    lName: 'Grusbe',
    jobTitle: 'work from home astronaut',
    specialSkill: 'asynchronous memory',
  }
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeammates })
  },
  post(url, { fName, lName, jobTitle, specialSkill }) {
    const newTeamMember = { id: uuid(), fName, lName, jobTitle, specialSkill }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}
