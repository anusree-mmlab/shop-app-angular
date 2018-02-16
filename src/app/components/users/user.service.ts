import * as _ from 'lodash';

export class UsersService {
   id: number;
  userList: any[] = [
    {id:1, name: 'Micky', email: 'micky@m.com', age:100},
    {id:2, name: 'Donald', email: 'donald@m.com' , age:10},
    {id:3, name: 'Goofy', email: 'goofy2m.com', age:60},
    {id:4, name: 'Minni', email: 'minni@m.com', age:60}
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

    addUser(userObj) {
        this.id = this.userList[this.userList.length - 1].id + 1;
        const id = {id: this.id};
        userObj = { ...id, ...userObj};
        this.userList.push(userObj);
    }
}