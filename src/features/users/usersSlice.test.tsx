import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import axios from 'axios';

import App from '../../App';
import { User } from '../../types';
import { renderWithProviders } from '../../utils/test-utils';

const data: User[] = [
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
