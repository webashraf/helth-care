import { prisma } from "../../../app";

const getAdmin = async (params: any) => {
  const andConditions: any[] = [];

  if (params.searchTerms) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: params.searchTerms,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: params.searchTerms,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  const whereConditions: any = { AND: andConditions };

  return prisma.admin.findMany({
    where: whereConditions,
  });
};

export const admin_service = {
  getAdmin,
};
