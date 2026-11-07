export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  initials: string;
  accent: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'naana-appiah',
    name: 'Naana Appiah',
    role: 'Head of Commercials',
    image: '/images/team/naana-appiah.jpg',
    initials: 'NA',
    accent: '#12304A'
  },
  {
    id: 'robert-larbi',
    name: 'Robert Larbi',
    role: 'Head of Marketing',
    image: '/images/team/robert-larbi.jpg',
    initials: 'RL',
    accent: '#F28C28'
  },
  {
    id: 'rahinatu-ako-husnah',
    name: 'Rahinatu Ako-Husnah',
    role: 'Head of Technology',
    image: '/images/team/rahinatu-ako-husnah.jpg',
    initials: 'RA',
    accent: '#2E8B7A'
  },
  {
    id: 'faraday-daniels',
    name: 'Faraday Daniels',
    role: 'Creative Lead',
    image: '/images/team/faraday-daniels.jpg',
    initials: 'FD',
    accent: '#F28C28'
  }
];
