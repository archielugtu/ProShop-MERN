import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Adds a method on this model, so that instances of this model can call this function
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Runs a middleware pre 'save'
userSchema.pre("save", async function (next) {
  // Mongoose functionality
  // checks if password isn't modified, then skip this middleware!
  // Avoids server from rehashing the password, which makes the user to not be able to log in
  if (!this.isModified("password")) {
    next(); // move on
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
