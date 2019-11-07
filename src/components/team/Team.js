import React from 'react'
import { Box, Text, Grid, Button } from 'grommet'
import { Facebook, Send, Mail } from 'grommet-icons'
import Link from '../Link'

import { useLocale } from '../../lib'

import sharanaprada from './sharanaprada.jpg'
import tim from './tim.jpg'
import vasiliy from './vasiliy.jpg'
import prema from './prema.jpg'
import radha from './radha.jpg'

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
      <Box direction='row' gap='xsmall'><Link to='/support-project'>{description}</Link></Box>
    </Box>
  )
}

export default ({ team }) => {
  const locale = useLocale()
  const members = {
    en: [
      { name: 'Sharanaprada das', description: 'Project Management', avatar: sharanaprada },
      { name: 'Bhakta Timofey', description: 'Site development', avatar: tim, email: 'tim@mayapur.live', facebook: 'timpchelintsev' },
      { name: 'Prema Manjari d.d.', description: 'Content creation', avatar: prema },
      { name: 'Bhakta Vasiliy', description: 'News Management', avatar: vasiliy },
      { name: 'Radha d.d.', description: 'Translations', avatar: radha },
      { name: 'You?', description: 'Join Team;)' }
    ],
    ru: [
      { name: 'Шаранапрада дас', description: 'Управление проектом', avatar: sharanaprada },
      { name: 'Бхакта Тимофей', description: 'Разработка сайта', avatar: tim, email: 'tim@mayapur.live', facebook: 'timpchelintsev' },
      { name: 'Према Манджари д.д.', description: 'Создание контента', avatar: prema },
      { name: 'Бхакта Василий', description: 'Новости', avatar: vasiliy },
      { name: 'Радха д.д.', description: 'Перевод', avatar: radha },
      { name: 'Вы?', description: 'Присоединиться;)' }
    ]
  }
  return (
    <Box fill pad='small' align='center'>
      <Grid fill rows='1fr' columns='small'>
        {members[locale].map(member => (
          <TeamMember key={member.name} {...member} />
        ))}
      </Grid>
    </Box>
  )
}
