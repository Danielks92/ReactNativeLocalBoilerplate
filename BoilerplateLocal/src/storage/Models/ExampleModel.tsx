import Realm from 'realm';

class Video {
  public static schema: Realm.ObjectSchema = {
    name: 'Video',
    primaryKey: 'youtubeID',
    properties: {
      youtubeID: 'uuid',
      title: 'string',
      filePath: 'string?',
      thumbnailPath: 'string?',
      uploadDate: 'date',
    },
  };

  public youtubeID: Realm.BSON.UUID;
  public title: string;
  public filePath?: string | null;
  public thumbnailPath?: string | null;
  public uploadDate: Date;

  constructor(youtubeID: Realm.BSON.UUID, title: string, uploadDate: Date) {
    this.youtubeID = youtubeID;
    this.title = title;
    this.uploadDate = uploadDate;
  }
}

export default Video;
export const realm = new Realm({schema: [Video.schema]});
