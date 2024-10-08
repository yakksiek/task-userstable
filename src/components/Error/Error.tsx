import { styled } from 'styled-components';
import Button from '../Button';
import Heading from '../Heading';

interface ErrorProps {
    errorMessage: string;
    onClick: () => void;
    disableErrorBtn?: boolean;
}

const SectionContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
`;

const StyledParagraphMessage = styled.p`
    margin-bottom: 0.5rem;
`;

function Error({ errorMessage, onClick, disableErrorBtn = false }: ErrorProps) {
    return (
        <SectionContainer>
            <Heading as='h3' $marginBottom={true}>
                {errorMessage}
            </Heading>
            <StyledParagraphMessage>Try again or try later</StyledParagraphMessage>
            <Button clickHandler={onClick} disabled={disableErrorBtn}>
                Try my luck
            </Button>
        </SectionContainer>
    );
}

export default Error;
