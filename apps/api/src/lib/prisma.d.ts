import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
export declare const prisma: PrismaClient<{
    adapter: PrismaPg;
    log: ("query" | "warn" | "error")[];
}, "query" | "warn" | "error", import("@prisma/client/runtime/client").DefaultArgs>;
//# sourceMappingURL=prisma.d.ts.map