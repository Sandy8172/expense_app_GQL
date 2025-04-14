import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./trsnsaction.typeDef.js";

const mergedtypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedtypeDefs;
