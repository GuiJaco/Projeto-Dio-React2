import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const TextContainer = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    width: 285px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`
export const Column = styled.div`
    flex: 1;
`
export const Wrapper = styled.div`
    max-width: 300px;
`
export const TitleContent = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin: 8px 0;

    color: #FFFFFF;
`
export const SubTitleContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin: 8px 0;
    margin-bottom: 22px;

    color: #FFFFFF;
`
export const TextContent = styled.p`
    width: 280px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    margin: 18px 0;

    color: #FFFFFF;
`
export const SubTextContent = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;

    cursor: pointer;

    a:link, a:visited{
        text-decoration: none;
        color: #23DD7A;
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`