import { useEffect } from 'react';
import Table from './components/Table';

import { styled } from 'styled-components';
import Error from './components/Error';
import Spinner from './components/Spinner';
import { userTableHeadersConfig } from './data/tableHeader';
import { fetchUsers } from './features/users/usersSlice';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { device } from './styles/breakPoints';

const StyledAppLayout = styled.div`
    max-width: 1400px;

    @media ${device.tablet} {
        height: 100vh;
        margin: 1rem auto;
        padding: 0 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
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
            {fetching && <Spinner />}
            {error && !fetching && (
                <Error errorMessage={error} onClick={() => dispatch(fetchUsers())} disableErrorBtn={fetching} />
            )}
            {!fetching && !error && (
                <Table
                    tableContent={userList}
                    headerData={userTableHeadersConfig}
                    title='User list'
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                />
            )}
        </StyledAppLayout>
    );
}

export default App;
