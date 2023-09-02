import { Query } from "..";
import { MysqlResponse, UsersTable } from "../models";

const find = (column: string, value: string) =>
    Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);

const insert = () => Query<MysqlResponse>('');

export default {
    find,
    insert
}