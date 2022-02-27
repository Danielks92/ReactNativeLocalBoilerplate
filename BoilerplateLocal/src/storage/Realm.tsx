import Realm from 'realm';
import {config} from '../config/Config';
import ExampleModel from './Models/ExampleModel';

export const realm = new Realm({
  path: 'UserDatabase.realm',
  schema: [ExampleModel],
});

// export const realm = Realm.open({
//     path: "myrealm",
//     schema: [ExampleModel],
//   });
