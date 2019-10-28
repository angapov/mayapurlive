import React from 'react'
import { Box, Text, Grid, Button } from 'grommet'
import { Facebook, Favorite, Send, Mail } from 'grommet-icons'
import Link from '../Link'

import sharanaprada from './sharanaprada.jpg'
import vasiliy from './vasiliy.jpg'

const SocialAccounts = ({ facebook, telegram, email }) => {
  return (
    <Box direction='row' gap='xsmall'>
      {facebook && <Button href={`https://m.me/${facebook}`} plain><Facebook color='control' size='small' /></Button>}
      {telegram && <Button href={`https://t.me/${telegram}`} plain><Send color='control' size='small' /></Button>}
      {email && <Button href={`mailto:${email}`} plain><Mail color='control' size='small' /></Button>}
    </Box>
  )
}

const TeamMember = ({ name, description, facebook, telegram, email, avatar }) => {
  return (
    <Box align='center' justify='center' style={{ maxHeight: '150px' }}>
      <Box round='xlarge' height='xsmall' width='xsmall' background={avatar ? { image: `url(${avatar})` } : 'dark-1'} />
      <Box direction='row' gap='xsmall'><Text>{name}</Text><SocialAccounts facebook={facebook} telegram={telegram} email={email} /></Box>
      <Box direction='row' gap='xsmall'><Link to='/support-project'><Favorite size='small' color='red' /> {description}</Link></Box>
    </Box>
  )
}

export default ({ team }) => {
  const members = [
    { name: 'Sharanaprada das', description: 'Project Management', avatar: sharanaprada },
    { name: 'Bhakta Timofey', description: 'Site development', email: 'tim@mayapur.live', facebook: 'timpchelintsev' },
    { name: 'Prema Manjari d.d.', description: 'Content creation' },
    { name: 'Bhakta Vasiliy', description: 'News Management', avatar: vasiliy },
    { name: 'You?', description: 'Join Team;)' }
  ]
  return (
    <Box fill pad='small' align='center'>
      <Grid fill rows='1fr' columns='small'>
        {members.map(member => (
          <TeamMember key={member.name} {...member} />
        ))}
      </Grid>
    </Box>
  )
}
