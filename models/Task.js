import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
    rotate: {
      type: Number,
      required: true
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);
