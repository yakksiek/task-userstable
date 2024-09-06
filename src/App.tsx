import { useEffect } from 'react';
import Table from './components/Table';

import { styled } from 'styled-components';
import Error from './components/Error';
import Spinner from './components/Spinner';
import { userTableHeadersConfig } from './data/tableHeader';
import { fetchUsers } from './features/users/usersSlice';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { device } from './styles/breakPoints';
import Heading from './components/Heading';

const StyledAppLayout = styled.div`
    max-width: 1400px;
    background-color: aliceblue;
    border: var(--border);
    padding: 0.5rem;
    background-color: var(--background-color-main);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);

    @media ${device.tablet} {
        border-radius: var(--border-radius-outer);
        margin: 1rem auto;
        padding: 1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

function App() {
    const { userList, error, fetching, currentPage, itemsPerPage } = useAppSelector(state => state.usersData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <StyledAppLayout>
            <Heading as='h2' $marginBottom={true} $textAlign='left'>
                User list {fetching && <Spinner />}
            </Heading>

            {error && !fetching && (
                <Error errorMessage={error} onClick={() => dispatch(fetchUsers())} disableErrorBtn={fetching} />
            )}
            {!fetching && !error && (
                <Table
                    tableContent={userList}
                    headerData={userTableHeadersConfig}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                />
            )}
        </StyledAppLayout>
    );
}

export default App;
