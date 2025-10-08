var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var roleStr = Role.Admin;
console.log(roleStr); // "ADMIN"
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["Admin"] = "ADMIN";
    RoleEnum["User"] = "USER";
})(RoleEnum || (RoleEnum = {}));
var user1 = {
    name: "Ferdous",
    role: RoleEnum.Admin
};
console.log("".concat(user1.name, " is ").concat(user1.role));
