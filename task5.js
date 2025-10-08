var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user1 = {
    name: "Ferdous",
    email: "ferdous@example.com",
    active: true
};
// user1.name = "Rahim";
console.log(user1.name);
function updateUser(user, update) {
    return __assign(__assign({}, user), update);
}
var user2 = {
    name: "Karim",
    email: "karim@example.com",
    active: false
};
var updatedUser = updateUser(user2, { active: true, phone: "01712345678" });
console.log(updatedUser);
