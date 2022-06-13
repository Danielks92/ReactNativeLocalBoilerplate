import {realm} from '../../src/storage/Realm'
import Video from '../storage/Models/ExampleModel';

export const writeToDatabase = () => {
    const {UUID} = Realm.BSON;
    
    realm.write(() => {
        let video = new Video(new UUID(), 'bar', new Date());
        realm.create(Video.schema.name, video);
      });
}