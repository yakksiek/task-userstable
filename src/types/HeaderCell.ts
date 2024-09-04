import { SimpleUser } from './User';

export default interface HeaderCell {
    title: string;
    field: keyof SimpleUser;
    filter: boolean;
}
