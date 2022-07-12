import React, {useEffect, useState} from 'react';
import stl from './Clock.module.css'

type PropsType = {
    analogClock: boolean
}
export const Clock: React.FC<PropsType> = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const get2DigitNumber = (num: number) => num < 10 ? '0' + num : num
    const clockToggle = !props.analogClock


    if (clockToggle) {
        return (<div>
            <span>{get2DigitNumber(date.getHours())}</span>
            :
            <span>{get2DigitNumber(date.getMinutes())}</span>
            :
            <span>{get2DigitNumber(date.getSeconds())}</span>
        </div>)
    } else {
        return (<div>
            <div className={stl.clock}>
                <div
                    className={stl.hour_hand}
                    style={{
                        transform: `rotateZ(${date.getHours() * 30}deg)`
                    }}
                />
                <div
                    className={stl.min_hand}
                    style={{
                        transform: `rotateZ(${date.getMinutes() * 6}deg)`
                    }}
                />
                <div
                    className={stl.sec_hand}
                    style={{
                        transform: `rotateZ(${date.getSeconds() * 6}deg)`
                    }}
                />
                <span className={stl.twelve}>12</span>
                <span className={stl.one}>1</span>
                <span className={stl.two}>2</span>
                <span className={stl.three}>3</span>
                <span className={stl.four}>4</span>
                <span className={stl.five}>5</span>
                <span className={stl.six}>6</span>
                <span className={stl.seven}>7</span>
                <span className={stl.eight}>8</span>
                <span className={stl.nine}>9</span>
                <span className={stl.ten}>10</span>
                <span className={stl.eleven}>11</span>
            </div>
        </div>)
    }


};

