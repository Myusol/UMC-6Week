import styled from "styled-components";

export const MovieDetail = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: left;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    display: none;
    z-index: 1;

    .detail-title {
        font-size: 15px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .detail-overview {
        font-size: 14px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 15; /* 표시할 줄 수 */
        -webkit-box-orient: vertical;
        margin: 0;
    }
`

export const MovieContents = styled.div`
    position: relative;
    background-color: rgba(55, 59, 105, 1);
    overflow: hidden;
    cursor: pointer;
    height: 380px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
        
    &:hover ${MovieDetail} {
        display: block;
    }
`


export const MoviePoster = styled.img`
    width: 100%;
    height: 300px;
    display: block;
    object-fit: fill;
`

export const MovieInfo = styled.div`
    position: absolute;
    background-color: rgba(55, 59, 105, 1);
    color: rgba(255, 255, 255, 1);
    display: flex;
    height: 60px;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;

    .movie-title {
        font-size: 13.5px;
        font-weight: bold;
        text-align: left;
        margin-left: 3px;
    }

    .movie-rate {
        text-align: right;
        font-size: 15px;
        margin-right: 3px;
    }
`