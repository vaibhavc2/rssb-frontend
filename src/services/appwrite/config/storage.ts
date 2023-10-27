import {
  APPWRITE_BUCKET_ID,
  APPWRITE_PROJECT_ID,
  APPWRITE_URL,
} from "@/config";
import { Client, ID, Storage } from "appwrite";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT_ID);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file: File) {
    try {
      return await this.storage.createFile(
        APPWRITE_BUCKET_ID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Storage Service :: uploadFile :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  async deleteFile(fileId: string) {
    try {
      await this.storage.deleteFile(APPWRITE_BUCKET_ID, fileId);
      return true;
    } catch (error) {
      console.log("Storage Service :: deleteFile :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  getFilePreview(fileId: string) {
    try {
      return this.storage.getFilePreview(APPWRITE_BUCKET_ID, fileId);
    } catch (error) {
      console.log("Storage Service :: getFilePreview :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  downloadFile(fileId: string) {
    try {
      return this.storage.getFileDownload(APPWRITE_BUCKET_ID, fileId);
    } catch (error) {
      console.log("Storage Service :: downloadFile :: ERROR ::", error);
      return false;
      // throw error;
    }
  }
}

const storageService = new StorageService();

export default storageService;
