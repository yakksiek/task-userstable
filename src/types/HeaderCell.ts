import User from './User';

export default interface HeaderCell {
    title: string;
    field: keyof User;
    filter: boolean;
}
