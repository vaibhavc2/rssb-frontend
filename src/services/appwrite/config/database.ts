// import {
//   APPWRITE_COLLECTION_ID,
//   APPWRITE_DATABASE_ID,
//   APPWRITE_PROJECT_ID,
//   APPWRITE_URL,
// } from "@/config";
// import { Client, Databases, Query } from "appwrite";
// import { Post, UpdatePost } from "../../types";

// export class DatabaseService {
//   client = new Client();
//   databases;

//   constructor() {
//     this.client.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT_ID);
//     this.databases = new Databases(this.client);
//   }

//   async createPost({
//     title,
//     slug,
//     content,
//     featuredImage,
//     status,
//     userId,
//   }: Post) {
//     try {
//       return await this.databases.createDocument(
//         APPWRITE_DATABASE_ID,
//         APPWRITE_COLLECTION_ID,
//         slug,
//         {
//           title,
//           content,
//           featuredImage,
//           status,
//           userId,
//         }
//       );
//     } catch (error) {
//       console.log("Database Service :: createPost :: ERROR ::", error);
//       return false;
//       // throw error;
//     }
//   }

//   async updatePost(
//     slug: string,
//     { title, content, featuredImage, status }: UpdatePost
//   ) {
//     try {
//       return await this.databases.updateDocument(
//         APPWRITE_DATABASE_ID,
//         APPWRITE_COLLECTION_ID,
//         slug,
//         { title, content, featuredImage, status }
//       );
//     } catch (error) {
//       console.log("Database Service :: updatePost :: ERROR ::", error);
//       return false;
//       // throw error;
//     }
//   }

//   async deletePost(slug: string) {
//     try {
//       await this.databases.deleteDocument(
//         APPWRITE_DATABASE_ID,
//         APPWRITE_COLLECTION_ID,
//         slug
//       );
//       return true;
//     } catch (error) {
//       console.log("Database Service :: deletePost :: ERROR ::", error);
//       return false;
//       // throw error;
//     }
//   }

//   async getPost(slug: string) {
//     try {
//       return await this.databases.getDocument(
//         APPWRITE_DATABASE_ID,
//         APPWRITE_COLLECTION_ID,
//         slug
//       );
//     } catch (error) {
//       console.log("Database Service :: getPost :: ERROR ::", error);
//       return false;
//       // throw error;
//     }
//   }

//   async getPosts(queries: string[] = [Query.equal("status", "active")]) {
//     try {
//       return await this.databases.listDocuments(
//         APPWRITE_DATABASE_ID,
//         APPWRITE_COLLECTION_ID,
//         queries
//       );
//     } catch (error) {
//       console.log("Database Service :: getPosts :: ERROR ::", error);
//       return false;
//       // throw error;
//     }
//   }
// }

// const databaseService = new DatabaseService();

// export default databaseService;
