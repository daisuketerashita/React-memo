import styled from 'styled-components';

const HintContainer = styled.div`
position: relative;
display: inline-flex;
margin-left: 12px;
`

const HintInner = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
border: 1px solid #757575;
width: 24px;
height: 24px;
cursor: pointer;
`
 
export const Hint = () => {
    return (
        <HintContainer>
            <HintInner>
                ?
            </HintInner>
        </HintContainer>
    )
}