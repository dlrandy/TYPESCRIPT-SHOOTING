/**
 * 在typescript里使用javascript的in来自动进行类型推导
 */

interface Admin {
  id: string;
  role: string;
}

interface User {
  email: string;
}

function redirect(usr: Admin | User) {
  // if ((<Admin>usr).role !== undefined) {
  //   // won't work: usr is still Admin | User
  // }
  if ('role' in usr) {//isAdmin(usr)
    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
  }
}

function isAdmin(usr: Admin | User): usr is Admin {//没有这个也会不好使
  return (<Admin> usr).role !== undefined;
}

declare function routeToAdminPage(role: string);
declare function routeToHomePage(id: string);