import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppMockService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, user: 'Tatiana', password: '1234' },
      { id: 2, user: 'Juan', password: 'admin' }
    ];

    const employees = [
      { id: 1, name: 'Santiago Alvarez', company: 'TODO1', age: 34, birthday: '1984-05-27', favoriteColor: 'rgb(0, 253, 255)' },
      { id: 2, name: 'Melissa Sepulveda', company: 'YUXI', age: 25, birthday: '1993-07-01', favoriteColor: 'rgb(213, 103, 225)' },
    ];

    return { users, employees };
  }
}
