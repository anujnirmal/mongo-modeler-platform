// import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// export const saveSchemaToMongoDB = async (
//   schemaData: AutosaveCanvasSchema
// ): Promise<void> => {
//   try {
//     await axios.post(`${API_URL}/schemas`, schemaData);
//   } catch (error) {
//     console.error('Error saving schema to MongoDB:', error);
//     throw error;
//   }
// };

// export const retrieveSchemaFromMongoDB = async (
//   userId: string,
//   schemaId?: string
// ): Promise<AutosaveCanvasSchema | null> => {
//   try {
//     // If schemaId is provided, get specific schema, otherwise get most recent
//     const url = schemaId
//       ? `${API_URL}/schemas/${schemaId}`
//       : `${API_URL}/schemas/latest/${userId}`;

//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error retrieving schema from MongoDB:', error);
//     return null;
//   }
// };

// export const deleteSchemaFromMongoDB = async (
//   schemaId: string
// ): Promise<void> => {
//   try {
//     await axios.delete(`${API_URL}/schemas/${schemaId}`);
//   } catch (error) {
//     console.error('Error deleting schema from MongoDB:', error);
//     throw error;
//   }
// };
