import React from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import './App.css';

const FlexCenterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    return (
        <>
            <Global
                styles={css`
                    .sub-container {
                        background-color: aqua;
                    }
                `}
            />
            <FlexCenterDiv>
                <div
                    css={css`
                        background-color: greenyellow;
                    `}
                >
                    메인 컨텐트
                </div>
            </FlexCenterDiv>
            <div className="sub-container">서브 컨텐트</div>
        </>
    );
}

export default App;
