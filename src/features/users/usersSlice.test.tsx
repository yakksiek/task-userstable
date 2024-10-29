import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

import App from '../../App';
import * as t from '../../types';
import { renderWithProviders } from '../../utils/test-utils';
import { setPage } from './usersSlice';

const data: t.User[] = [
    {
        id: 1,
        name: 'Zenon Zenonkiewicz',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '3212-12321',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
];

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('shows spinner while loading and displays user data after loading', async () => {
    mockedAxios.get.mockImplementationOnce(() => new Promise(resolve => setTimeout(() => resolve({ data }), 1000)));

    jest.useFakeTimers();

    renderWithProviders(<App />);

    expect(screen.getByText(/user list/i)).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    jest.advanceTimersByTime(1000);
    await screen.findByText(/Zenon Zenonkiewicz/i);

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();

    jest.useRealTimers();
});

test('handles API failure correctly and displays an error message', async () => {
    mockedAxios.get.mockRejectedValueOnce({
        response: {
            status: 500,
            data: { message: 'Internal Server Error' },
        },
    });

    renderWithProviders(<App />);
    expect(screen.getByText(/user list/i)).toBeInTheDocument();
    expect(await screen.findByText(/An unknown error occurred/i)).toBeInTheDocument();
});

test('displays correct number of users after changing items per page', async () => {
    const mockUsers: t.User[] = [
        {
            id: 1,
            name: 'Alice Thompson',
            username: 'aliceT',
            email: 'alice.thompson@example.com',
            address: {
                street: 'Maple Avenue',
                suite: 'Apt. 101',
                city: 'Springfield',
                zipcode: '54321',
                geo: { lat: '-23.5599', lng: '45.7499' },
            },
            phone: '123-456-7890',
            website: 'alice.dev',
            company: {
                name: 'Thompson Tech',
                catchPhrase: 'Innovative tech solutions',
                bs: 'enable cross-platform paradigms',
            },
        },
        {
            id: 2,
            name: 'Brian Lee',
            username: 'brianl',
            email: 'brian.lee@example.com',
            address: {
                street: 'Oak Street',
                suite: 'Suite 303',
                city: 'Metropolis',
                zipcode: '45678',
                geo: { lat: '-13.7645', lng: '67.1234' },
            },
            phone: '321-654-0987',
            website: 'brianlee.net',
            company: {
                name: 'Lee Enterprises',
                catchPhrase: 'Empowering digital transformation',
                bs: 'leverage real-time networks',
            },
        },
        {
            id: 3,
            name: 'Carol Danvers',
            username: 'carold',
            email: 'carol.danvers@example.com',
            address: {
                street: 'Birch Road',
                suite: 'Apt. 202',
                city: 'Gotham',
                zipcode: '67890',
                geo: { lat: '32.7567', lng: '-78.1234' },
            },
            phone: '555-0123-4567',
            website: 'caroldanvers.com',
            company: {
                name: 'Danvers Digital',
                catchPhrase: 'Expanding horizons with technology',
                bs: 'optimize seamless architectures',
            },
        },
        {
            id: 4,
            name: 'Diana Prince',
            username: 'dianap',
            email: 'diana.prince@wonder.com',
            address: {
                street: 'Paradise Lane',
                suite: 'Suite 409',
                city: 'Amazonia',
                zipcode: '98765',
                geo: { lat: '40.1234', lng: '-74.5678' },
            },
            phone: '987-654-3210',
            website: 'dianap.dev',
            company: {
                name: 'Prince Ventures',
                catchPhrase: 'Empowering modern innovations',
                bs: 'drive next-gen solutions',
            },
        },
        {
            id: 5,
            name: 'Edward Stark',
            username: 'edwardst',
            email: 'edward.stark@winterfell.com',
            address: {
                street: 'Castle Road',
                suite: 'Suite 556',
                city: 'Winterfell',
                zipcode: '10111',
                geo: { lat: '-45.2345', lng: '23.7890' },
            },
            phone: '555-987-1234',
            website: 'edwardstark.net',
            company: {
                name: 'Stark Industries',
                catchPhrase: 'Forge a better future',
                bs: 'advance resourceful designs',
            },
        },
        {
            id: 6,
            name: 'Frank Castle',
            username: 'frankc',
            email: 'frank.castle@vigilante.com',
            address: {
                street: 'Punisher Lane',
                suite: 'Apt. 408',
                city: 'New York',
                zipcode: '10109',
                geo: { lat: '-12.3456', lng: '45.6789' },
            },
            phone: '555-345-6789',
            website: 'frankcastle.org',
            company: {
                name: 'Castle Security',
                catchPhrase: 'Pioneering safety solutions',
                bs: 'secure proactive assets',
            },
        },
        {
            id: 7,
            name: 'George McFly',
            username: 'georgem',
            email: 'george.mcfly@backintime.com',
            address: {
                street: 'Hill Valley',
                suite: 'Suite 88',
                city: 'California',
                zipcode: '90504',
                geo: { lat: '34.0564', lng: '-118.2468' },
            },
            phone: '555-909-8765',
            website: 'georgemcfly.com',
            company: {
                name: 'McFly Enterprises',
                catchPhrase: 'Transforming possibilities',
                bs: 'cultivate forward-thinking innovation',
            },
        },
        {
            id: 8,
            name: 'Harry Potter',
            username: 'harryp',
            email: 'harry.potter@hogwarts.com',
            address: {
                street: 'Privet Drive',
                suite: 'Apt. 4',
                city: 'Little Whinging',
                zipcode: '48392',
                geo: { lat: '51.5074', lng: '-0.1278' },
            },
            phone: '555-111-2222',
            website: 'harrypotter.uk',
            company: {
                name: 'Hogwarts Magic',
                catchPhrase: 'Enchantment at your fingertips',
                bs: 'foster magical ecosystems',
            },
        },
        {
            id: 9,
            name: 'Ivy Lane',
            username: 'ivyl',
            email: 'ivy.lane@botanica.com',
            address: {
                street: 'Rose Avenue',
                suite: 'Apt. 300',
                city: 'Botanica',
                zipcode: '85674',
                geo: { lat: '45.7643', lng: '-23.6745' },
            },
            phone: '555-444-5678',
            website: 'ivylane.com',
            company: {
                name: 'Botanica Ltd',
                catchPhrase: 'Greening the future',
                bs: 'develop sustainable ecosystems',
            },
        },
        {
            id: 10,
            name: 'James Kirk',
            username: 'captkirk',
            email: 'james.kirk@starfleet.com',
            address: {
                street: 'Enterprise Drive',
                suite: 'Suite 1701',
                city: 'San Francisco',
                zipcode: '94109',
                geo: { lat: '37.7749', lng: '-122.4194' },
            },
            phone: '555-123-1701',
            website: 'startrek.com',
            company: {
                name: 'Starfleet Command',
                catchPhrase: 'To boldly go where no one has gone before',
                bs: 'explore limitless frontiers',
            },
        },
    ];
    mockedAxios.get.mockResolvedValue({ data: mockUsers });

    const { store } = renderWithProviders(<App />);

    await waitFor(() => {
        expect(screen.getByText(/Alice Thompson/i)).toBeInTheDocument();
    });

    const itemsPerPageSelect = screen.getByLabelText(/Items per page:/i);
    fireEvent.change(itemsPerPageSelect, { target: { value: '3' } });

    await waitFor(() => {
        const userRows = screen.getAllByRole('row');
        expect(userRows).toHaveLength(4); // 1 header row + 3 user rows
    });

    expect(store.getState().usersData.itemsPerPage).toBe(3);

    const nextPageButton = screen.getByTestId('next-page-button');
    fireEvent.click(nextPageButton);

    store.dispatch(setPage(2));

    await waitFor(() => {
        expect(screen.getByText(/Diana Prince/i)).toBeInTheDocument();
        screen.debug();
        expect(screen.queryByText(/Alice Thompson/i)).not.toBeInTheDocument();
    });
});
