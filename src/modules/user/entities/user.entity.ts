// //PUT THE MODEL OF YOUR ORM (I'M NOT USING BUT I WILL LEAVE A MONGOOSE EXAMPLE)

// import * as bcrypt from "bcryptjs";
// import { model, Schema, PaginateModel } from "mongoose";
// import aggregatePaginate from "mongoose-aggregate-paginate-v2";
// import mongoosePaginate from "mongoose-paginate-v2";

// import { IUserEntity } from "./interfaces/user.entity.interface";

// const UserSchema = new Schema<IUserEntity>(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       select: false,
//     },
//     passwordResetToken: {
//       type: String,
//       select: false,
//     },
//     passwordResetExpires: {
//       type: Date,
//       select: false,
//     },
//     cellphone: {
//       type: String,
//       required: true,
//     },
//     cnpj: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     status: {
//       type: Boolean,
//       default: true,
//     },
//     discount: {
//       type: Number,
//       required: false,
//     },
//     type: {
//       type: String,
//       required: true,
//     },
//     address: [
//       {
//         street: {
//           type: String,
//           required: true,
//         },
//         number: {
//           type: String,
//           required: true,
//         },
//         complement: {
//           type: String,
//           required: true,
//         },
//         neighborhood: {
//           type: String,
//           required: true,
//         },
//         zipcode: {
//           type: String,
//           required: true,
//         },
//         city: {
//           type: String,
//           required: true,
//         },
//         state: {
//           type: String,
//           required: true,
//         },
//         type: {
//           type: String,
//           required: true,
//         },
//         default: {
//           type: Boolean,
//           required: true,
//         },
//       },
//     ],
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   { collection: "users" }
// );

// UserSchema.pre("save", async function (next) {
//   const hash = await bcrypt.hash(this.password, 10);
//   this.password = hash;
//   next();
// });

// const UserModel: PaginateModel<IUserEntity> = model<IUserEntity>(
//   "User",
//   UserSchema
// );

// export { UserModel, IUserEntity };

