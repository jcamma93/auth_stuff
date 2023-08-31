import { Query } from "..";
import { MysqlResponse, UsersTable } from "../models";

const find = () => Query<UsersTable[]>('', []);
const insert = () => Query<MysqlResponse>('');

export default {
    find,
    insert
}