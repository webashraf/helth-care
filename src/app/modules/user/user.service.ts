import bcrypt from "bcrypt";
import { prisma } from "../../../app";
import { UserRole } from "../../../generated/prisma";

const createAdmin = async (data: any) => {
  const hashPassword = await bcrypt.hash(data.password, 12);

  const userData = {
    name: data.admin.name,
    email: data.admin.email,
    password: hashPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transectionClient: any) => {
    await transectionClient.user.create({
      data: userData,
    });
    const createdAdmin = await transectionClient.admin.create({
      data: data.admin,
    });

    return createdAdmin;
  });

  return result;
};

export const user_service = {
  createAdmin,
};
