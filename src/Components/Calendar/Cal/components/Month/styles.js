import styled from 'styled-components'
import { colors } from '../../../../../GlobalStyles'

export const MonthContainer = styled.div`
    width: max-content;
    border-radius: 3px;
    margin: 1vh auto;
    display: grid;
    box-shadow: 5px 5px 5px -5px black, 15px 15px 75px -55px #000000aa;
    align-items: center;
    justify-content: space-between;
    grid-template-rows: 9.5rem 2rem;
    grid-template-columns: 14.28% 14.28% 14.28% 14.28% 14.28% 14.28% 14.28%;
    grid-template-areas: 'title title title title title title title' 'Sun Mon Tue Wed Thu Fri Sat' 'day1 day2 day3 day4 day5 day6 day7' 'day8 day9 day10 day11 day12 day13 day14' 'day15 day16 day17 day18 day19 day20 day21' 'day22 day23 day24 day25 day26 day27 day28' 'day29 day30 day31 day32 day33 day34 day35' 'day36 day37 day38 day39 day40 day41 day42';
    border: 1px solid lightgray;
    background: whitesmoke;
`,
    Top = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        grid-area: title;
    `,
    Title = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;

        h3 {
            justify-self: center;
            align-self: center;
            margin: 5px 0 0;
        }
    `,
    Next = styled.span`
        border-radius: 50%;
        padding: 10px;
        position: relative;
        top: 100%;
        line-height: .5;
        color: whitesmoke;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${colors.primary};
        border: none;
        cursor: pointer;
        transition: .3s ease;
    
        &:hover{
          transform: scale(1.1);
        }
    `,
    DayName = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        bottom: -3px;
        border-bottom: 1px solid black;
        grid-area: ${props => props.day};
        color: ${colors.primary};
        background: whitesmoke;
    `,
    Day = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background: whitesmoke;
        transition: .3s ease;
        cursor: pointer;
        padding: 25px;
        border-radius: 15px;
        grid-area: ${props => props.day};
        border: ${props => props.match && '2px ridge red'};

        &:hover{
            background: ${colors.primary}55;
            border-radius: 50%;
        }

        &.active{
            color: ${colors.primary};
            background: ${colors.primary}55;
            border-radius: 15px;
            transition: .3s ease;

            &:hover{
                background: ${colors.primary}88;
                border-radius: 50%;
            }
        }
    `,
    Blank = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background: whitesmoke;
        transition: .3s ease;
        cursor: pointer;
        padding: 25px;
        border-radius: 15px;
        color: #cecece;
        transition: .3s ease;
        grid-area: ${props => props.blank};

        &:hover{
            background: ${colors.accent}33;
            color: gray;
        }
    `
