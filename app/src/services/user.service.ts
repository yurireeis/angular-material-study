/// <reference path="../_all.ts" />

module ContactManagerApp {

    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User;
    }

    export class UserService implements IUserService {
        'ngInject';

        constructor(private $q: ng.IQService) {

        }

        selectedUser: User = null;

        loadAllUsers() : ng.IPromise<User[]> {
            return this.$q.when(this.users);
        }

        private users: [User] = [
            {
                name: 'Eric Riley',
                avatar: 'svg-1',
                bio: 'I have, have together',
                notes: [{
                    title: "Pay back dinner", 
                    date: new Date("2016-01-12")
                }, {
                    title: "Buy flowers for birthday",
                    date: new Date("2016-01-19")
                }]
            },
            {
                name: 'Yuri Reis',
                avatar: 'svg-2',
                bio: 'I have nothing to do',
                notes: []
            }
        ];
    }

}