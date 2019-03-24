interface Admin {
    id: string;
    role: string;
}
interface User {
    email: string;
}
declare function routeToAdminPage(role: string): any;
declare function routeToHomePage(id: string): any;
