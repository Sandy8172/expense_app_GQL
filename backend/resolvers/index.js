import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import transactionesolver from "./transaction.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, transactionesolver]);

export default mergedResolvers;
