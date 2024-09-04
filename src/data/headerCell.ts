import * as t from '../types';

export const columns: t.HeaderCell[] = [
    {
        title: 'id',
        field: 'id',
        filter: false,
    },
    {
        title: 'Name',
        field: 'firstName',
        filter: true,
    },
    {
        title: 'Username',
        field: 'username',
        filter: true,
    },
    {
        title: 'Age',
        field: 'age',
        filter: false,
    },
    {
        title: 'E-mail',
        field: 'email',
        filter: true,
    },
];
