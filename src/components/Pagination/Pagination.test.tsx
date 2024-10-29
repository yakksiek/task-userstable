import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Pagination from './Pagination';

describe('Pagination', () => {
    test('renders and disables pagination buttons correctly', () => {
        const onNextPage = jest.fn();
        const onPreviousPage = jest.fn();
        const setPageHandler = jest.fn();

        const { rerender } = renderWithProviders(
            <Pagination
                currentPage={1}
                totalPages={5}
                onNextPage={onNextPage}
                onPreviousPage={onPreviousPage}
                setPageHandler={setPageHandler}
            />,
        );

        expect(screen.queryByTestId('first-page-button')).toHaveAttribute('disabled');
        expect(screen.queryByTestId('previous-page-button')).toHaveAttribute('disabled');

        expect(screen.getByTestId('next-page-button')).toBeInTheDocument();
        expect(screen.getByTestId('last-page-button')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('next-page-button'));
        expect(onNextPage).toHaveBeenCalledTimes(1);

        rerender(
            <Pagination
                currentPage={2}
                totalPages={5}
                onNextPage={onNextPage}
                onPreviousPage={onPreviousPage}
                setPageHandler={setPageHandler}
            />,
        );

        expect(screen.getByTestId('first-page-button')).not.toBeDisabled();
        expect(screen.getByTestId('previous-page-button')).not.toBeDisabled();
    });

    test('renders information about page count', () => {
        const onNextPage = jest.fn();
        const onPreviousPage = jest.fn();
        const setPageHandler = jest.fn();

        renderWithProviders(
            <Pagination
                currentPage={1}
                totalPages={5}
                onNextPage={onNextPage}
                onPreviousPage={onPreviousPage}
                setPageHandler={setPageHandler}
            />,
        );

        expect(screen.getByText(/Page 1 of 5/i));
    });

    test('correctly changes items per page', () => {
        // const store = setupStore(); // Create a store for testing with initial values
        const { store } = renderWithProviders(
            <Pagination
                currentPage={1}
                totalPages={5}
                onNextPage={() => {}}
                onPreviousPage={() => {}}
                setPageHandler={() => {}}
            />,
        );

        const itemsPerPageSelect = screen.getByLabelText(/Items per page:/i);
        fireEvent.change(itemsPerPageSelect, { target: { value: '5' } });

        expect(store.getState().usersData.itemsPerPage).toBe(5);
    });
});
