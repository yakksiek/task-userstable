import Table from './components/Table';

import users from './data/users';
import { userTableHeadersConfig } from './data/tableHeader';
import { styled } from 'styled-components';

const StyledAppLayout = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;

function App() {
    return (
        <StyledAppLayout>
            <Table tableContent={users} headerData={userTableHeadersConfig} title='User list' />
        </StyledAppLayout>
    );
}

export default App;
