import styled from "styled-components";

export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-auto-rows: minmax(auto, 1fr); /* 내용물의 높이를 비율에 맞게 조절 */
    gap: 20px;
    justify-content: center;
    margin: 30px 150px;
`

export const DetailContent = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 40px;
    margin-left: 160px;
`;

export const DetailPoster = styled.img`
    width: 280px;
    height: 400px;
`

export const DetailTitle = styled.div `
    font-size: 30px;
    font-weight: bold;
    text-align: left;
`