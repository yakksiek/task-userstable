import Table from './components/Table';

import { styled } from 'styled-components';
import { userTableHeadersConfig } from './data/tableHeader';
import { useAppSelector } from './hooks/reduxHooks';

const StyledAppLayout = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;

function App() {
    const { userList } = useAppSelector(state => state.usersData);

    return (
        <StyledAppLayout>
            <Table tableContent={userList} headerData={userTableHeadersConfig} title='User list' />
        </StyledAppLayout>
    );
}

export default App;
