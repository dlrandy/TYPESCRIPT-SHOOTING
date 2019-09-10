import { userInfo } from "os";

type ExistingUser = {
  id: number;
  name: string;
}
type NewUser = {
  name: string;
}

function deleteUser(User:{id?: number, name: string}) {
  delete User.id
}

let existingUser: ExistingUser = {
  id: 123456,
  name: 'ima user'
}
deleteUser(existingUser);
deleteUser(existingUser)
existingUser.id


type LegacyUser = {
  id?: number | string,
  name: string
}

let legacyUser:LegacyUser = {
  id: '79331',
  name: 'eric'
}

deleteUser(legacyUser);