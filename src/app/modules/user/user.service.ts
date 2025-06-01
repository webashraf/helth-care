import bcrypt from "bcrypt";
import { prisma } from "../../../app";
import { USER_ROLE } from "../../../generated/prisma";

import { PrismaClient } from "@prisma/client";

const createAdmin = async (data: any) => {
  try {
    const hashPassword = await bcrypt.hash(data.password, 12);
    const userData = {
      name: data.admin.name,
      email: data.admin.email,
      password: hashPassword,
      role: USER_ROLE.ADMIN,
    };

    const result = await prisma.$transaction(
      async (traClient: PrismaClient) => {
        const user = await traClient.user.create({ data: userData });
        console.log(
          "🚀 ~ createAdmin ~ userData:",

          {
            ...data.admin,
            userId: user.id,
          }
        );
        const createdAdmin = await traClient.admin.create({
          data: {
            ...data.admin,
          },
        });
        return createdAdmin;
      }
    );

    return result;
  } catch (error: any) {
    console.error("PrismaClientUnknownRequestError:", error.message);
    console.error("Client version:", error.clientVersion);
    console.error(error);
    throw error;
  }
};

export const user_service = {
  createAdmin,
};
