function redirect(usr) {
    if ('role' in usr) {
        routeToAdminPage(usr.role);
    }
    else {
        routeToHomePage(usr.email);
    }
}
function isAdmin(usr) {
    return usr.role !== undefined;
}
//# sourceMappingURL=automatic-type-infere.js.map