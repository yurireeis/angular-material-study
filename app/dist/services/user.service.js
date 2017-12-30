/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService = /** @class */ (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
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
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        return UserService;
    }());
    ContactManagerApp.UserService = UserService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=user.service.js.map