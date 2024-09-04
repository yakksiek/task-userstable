import * as t from '../types';

export const userTableHeadersConfig: t.HeaderCell[] = [
    {
        title: 'id',
        field: 'id',
        filter: false,
    },
    {
        title: 'Name',
        field: 'name',
        filter: true,
    },
    {
        title: 'Username',
        field: 'username',
        filter: true,
    },
    {
        title: 'E-mail',
        field: 'email',
        filter: true,
    },
];
