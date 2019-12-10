import React from 'react'
import { Box, Text, Grid, Button } from 'grommet'
import { Facebook, Send, Mail, Github } from 'grommet-icons'
import Link from '../Link'

import { useLocale } from '../../lib'

import sharanaprada from './sharanaprada.jpg'
import tim from './tim.jpg'
import vasiliy from './vasiliy.jpg'
import prema from './prema.jpg'
import radha from './radha.jpg'
import taisiya from './taisiya.jpg'
import alena from './alena.jpg'
import vraja from './vraja-palini.jpg'
import defaultAvatar from './default.jpg'

const SocialAccounts = ({ facebook, telegram, github, email }) => {
  return (
    <Box direction='row' gap='xsmall'>
      {facebook && <Button href={`https://m.me/${facebook}`} plain><Facebook color='control' size='small' /></Button>}
      {telegram && <Button href={`https://t.me/${telegram}`} plain><Send color='control' size='small' /></Button>}
      {github && <Button href={`https://github.com/${github}`} plain><Github color='control' size='small' /></Button>}
      {email && <Button href={`mailto:${email}`} plain><Mail color='control' size='small' /></Button>}
    </Box>
  )
}

const TeamMember = ({ name, description, facebook, telegram, github, email, avatar }) => {
  return (
    <Box align='center' justify='center' style={{ maxHeight: '150px' }}>
      <Box round='xlarge' height='xsmall' width='xsmall' background={avatar ? { image: `url(${avatar})` } : 'dark-1'} />
      <Box direction='row' gap='xsmall'><Text>{name}</Text><SocialAccounts facebook={facebook} telegram={telegram} github={github} email={email} /></Box>
      <Box direction='row' gap='xsmall'><Link to='/support-project'>{description}</Link></Box>
    </Box>
  )
}

export default ({ team }) => {
  const locale = useLocale()
  const members = {
    en: [
      { name: 'Sharanaprada das', description: 'Project Management', avatar: sharanaprada },
      { name: 'Bhakta Timofey', description: 'Site development', avatar: tim, email: 'tim@mayapur.live', github: 'timpchelintsev' },
      { name: 'Bhakta Dmitriy', description: 'Site development', avatar: defaultAvatar, github: 'dbachko' },
      { name: 'Prema Manjari d.d.', description: 'Content creation', avatar: prema },
      { name: 'Bhaktin Taisiya', description: 'Content creation', avatar: taisiya },
      { name: 'Bhaktin Alena', description: 'Content creation', avatar: alena },
      { name: 'Vraja Palini d.d.', description: 'Content creation', avatar: vraja },
      { name: 'Bhakta Vasiliy', description: 'News Management', avatar: vasiliy },
      { name: 'Bhaktin Radha', description: 'News Management', avatar: radha },
      { name: 'You?', description: 'Join Team;)', avatar: defaultAvatar }
    ],
    ru: [
      { name: 'Шаранапрада дас', description: 'Управление проектом', avatar: sharanaprada },
      { name: 'Бхакта Тимофей', description: 'Разработка сайта', avatar: tim, email: 'tim@mayapur.live', github: 'timpchelintsev' },
      { name: 'Бхакта Дмитрий', description: 'Разработка сайта', avatar: defaultAvatar, github: 'dbachko' },
      { name: 'Према Манджари д.д.', description: 'Создание контента', avatar: prema },
      { name: 'Бхактин Таисия', description: 'Создание контента', avatar: taisiya },
      { name: 'Бхактин Алена', description: 'Создание контента', avatar: alena },
      { name: 'Враджа Палини д.д.', description: 'Создание контента', avatar: vraja },
      { name: 'Бхакта Василий', description: 'Новости', avatar: vasiliy },
      { name: 'Бхактин Радха', description: 'Новости', avatar: radha },
      { name: 'Вы?', description: 'Присоединиться;)', avatar: defaultAvatar }
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
