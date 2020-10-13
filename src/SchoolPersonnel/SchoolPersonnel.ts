export enum ROLE {
  STD = 'student',
  TEACH = 'teacher',
}

export class SchoolPersonnel {
  id: number;
  name: string;
  email: string;
  role: ROLE

  constructor(name: string, email: string, role: ROLE) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
}