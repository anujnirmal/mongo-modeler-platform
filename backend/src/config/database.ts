import mongoose from 'mongoose';

const connectDB = async (): Promise<any> => {
  try {
    const mongoURI: string = process.env.MONGO_URI || '';

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
