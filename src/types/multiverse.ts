export interface Universe {
  id: string;
  num: string;
  hero: string;
  name: string;
  theme: string;
  quote: string;
  desc: string;
  stack: string[];
  img: string;
  fallbackImg: string;
}

export interface NavigatorStation {
  id: string;
  num: string;
  hero: string;
  role: string;
  dimension: string;
  headingMain: string;
  headingSub: string;
  quote: string;
  power: string;
  fresher: string;
  skills: string[];
  theme: string;
  border: string;
  img: string;
  fallbackImg: string;
}

export interface RecruitState {
  id: string;
  name: string;
  email: string;
  phone: string;
  branch: string;
  year: string;
  github: string;
  domains: string[];
  rank: string;
  registered: boolean;
  discoveredUniverses: string[];
}

export interface ScheduleEvent {
  time: string;
  title: string;
  category: string;
  desc: string;
  badge: string;
}

export interface DaySchedule {
  label: string;
  date: string;
  theme: string;
  events: ScheduleEvent[];
}
