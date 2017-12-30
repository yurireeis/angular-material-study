/// <reference path="../_all.ts" />

module ContactManagerApp {
    export class MainController {
        'ngInject';

        users: User[] = [];
        message: string = "Hello from our controller";
        selected: User = null;
        searchText: string = "";
        tabIndex: number = 0;

        constructor (
            private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService
        ) {
            var self = this;
            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    self.selected = users[0];
                });
        }

        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectUser(user: User): void {
            this.selected = user;

            var sidenav = this.$mdSidenav('left');

            if (sidenav.isOpen()) {
                sidenav.close();
            }
        }

        removeNote(note: Note): void {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Note was removed");
        }

        openToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(3000)
            );
        }
    }
}