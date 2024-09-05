import { styled } from 'styled-components';
import Button from '../Button';
import Heading from '../Heading';

interface ErrorProps {
    errorMessage: string;
    onClick: () => void;
    disableErrorBtn?: boolean;
}

const StyledParagraphMessage = styled.p`
    margin-bottom: 0.5rem;
`;

function Error({ errorMessage, onClick, disableErrorBtn = false }: ErrorProps) {
    return (
        <div>
            <Heading as='h1' $marginBottom={true}>
                {errorMessage}
            </Heading>
            <StyledParagraphMessage>Try again or try later</StyledParagraphMessage>
            <Button clickHandler={onClick} disabled={disableErrorBtn}>
                Try my luck
            </Button>
        </div>
    );
}

export default Error;
