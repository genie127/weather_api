import { styled } from "styled-components";

export const Container = styled.div`
    max-width:100%;
    width:${(props)=>props.$width || '1200px'};
    padding: 0 15px;
    margin:0 auto;

`
export const Btn = styled.div`
    width:45px; height:45px; display:flex; justify-content:center; align-items:center; border:1px solid #fff; border-radius:50%; color:#fff; cursor:pointer;
`