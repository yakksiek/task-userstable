import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import * as t from '../../types';
import { renderWithProviders } from '../../utils/test-utils';
import Table from './Table';

const mockUsers: t.User[] = [
    {
        id: 1,
        name: 'Alice Johnson',
        username: 'alicej',
        email: 'alice.johnson@example.com',
        address: {
            street: 'Maple Street',
            suite: 'Apt. 101',
            city: 'Springfield',
            zipcode: '12345-6789',
            geo: {
                lat: '-37.9876',
                lng: '81.1234',
            },
        },
        phone: '555-1234',
        website: 'alicejohnson.dev',
        company: {
            name: 'Tech Solutions Ltd',
            catchPhrase: 'Innovative solutions for modern problems',
            bs: 'revolutionize data-driven platforms',
        },
    },
    {
        id: 2,
        name: 'Bob Martinez',
        username: 'bobm',
        email: 'bob.martinez@example.com',
        address: {
            street: 'Oak Avenue',
            suite: 'Suite 202',
            city: 'Lincolnville',
            zipcode: '54321-0987',
            geo: {
                lat: '-45.2345',
                lng: '-35.6789',
            },
        },
        phone: '555-5678',
        website: 'bobmartinez.dev',
        company: {
            name: 'Martinez Industries',
            catchPhrase: 'Empowering businesses with technology',
            bs: 'streamline efficient infrastructures',
        },
    },
    {
        id: 3,
        name: 'Carol Smith',
        username: 'carols',
        email: 'carol.smith@example.com',
        address: {
            street: 'Pine Lane',
            suite: 'Suite 303',
            city: 'Lakeview',
            zipcode: '67890-1234',
            geo: {
                lat: '-60.7890',
                lng: '-50.3456',
            },
        },
        phone: '555-7890',
        website: 'carolsmith.dev',
        company: {
            name: 'Smith & Co',
            catchPhrase: 'Bridging the gap between tech and life',
            bs: 'optimize scalable solutions',
        },
    },
];

const mockHeaders: t.HeaderCell[] = [
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
    {
        title: 'Phone number',
        field: 'phone',
        filter: true,
    },
];

test('renders table headers and rows correctly', () => {
    renderWithProviders(<Table tableContent={mockUsers} headerData={mockHeaders} currentPage={1} itemsPerPage={10} />);

    mockHeaders.forEach(header => {
        expect(screen.getByText(header.title)).toBeInTheDocument();
    });

    mockUsers.forEach(user => {
        expect(screen.getByText(user.email)).toBeInTheDocument();
    });
});

test('renders input fields correctly and filters data', () => {
    const filteredUserName = 'Alice Johnson';
    renderWithProviders(<Table tableContent={mockUsers} headerData={mockHeaders} currentPage={1} itemsPerPage={10} />);

    mockHeaders.forEach(header => {
        expect(screen.getByPlaceholderText(`Filter for ${header.title}`)).toBeInTheDocument();
    });

    const nameInput = screen.getByPlaceholderText('Filter for Name');
    fireEvent.change(nameInput, { target: { value: filteredUserName } });

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(2); // 1 user + 1 header

    expect(screen.getByText(filteredUserName)).toBeInTheDocument();
});

test('renders a message when there are not results for filter query', () => {
    const filteredUserName = 'Alice Smith';
    const noResultsMsg = /No results found for your query/i;
    renderWithProviders(<Table tableContent={mockUsers} headerData={mockHeaders} currentPage={1} itemsPerPage={10} />);

    mockHeaders.forEach(header => {
        expect(screen.getByPlaceholderText(`Filter for ${header.title}`)).toBeInTheDocument();
    });

    const nameInput = screen.getByPlaceholderText('Filter for Name');
    fireEvent.change(nameInput, { target: { value: filteredUserName } });

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1); // only header

    expect(screen.getByText(noResultsMsg)).toBeInTheDocument();
});
