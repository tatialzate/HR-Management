import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppMockService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, user: 'Tatiana', password: '1234' },
      { id: 2, user: 'Juan', password: 'ASDF' }
    ];

    const employees = [
      { id: 1, name: 'Santiago Alvarez', company: 'TODO1', age: 34, birthday: '15041984', favoriteColor: 'Azul' },
      { id: 2, name: 'Melissa Sepulveda', company: 'YUXI', age: 25, birthday: '01071993', favoriteColor: 'Rosado' },
    ];

    // const projects = [
    //   { id: 1, name: 'Rediferidos', teamSize: 0, clientName: 'Davivienda' },
    //   { id: 2, name: 'A un clic', teamSize: 0, clientName: 'Bancolombia' },
    // ];
    return { users, employees };
  }
}
