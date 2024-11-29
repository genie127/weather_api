import { styled } from "styled-components";

export const Container = styled.div`
    max-width:100%;
    width:${(props)=>props.$width || '1200px'};
    padding: 0 15px

`