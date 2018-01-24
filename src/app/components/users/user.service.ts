import * as _ from 'lodash';

export class UsersService {

  userList: any[] = [
    {id:1, name: 'Micky', age:100},
    {id:2, name: 'Donald', age:10},
    {id:3, name: 'Goofy', age:60},
    {id:4, name: 'Minni', age:60}
  ];

    constructor() {

    }

    getUserList() {
        return this.userList;
    }

    getUserById(id) {
        const index = _.findIndex(this.userList, {'id': id});
        if (index !== -1) {
            return this.userList[index];
        } else {
            return null;
        }
    }
}