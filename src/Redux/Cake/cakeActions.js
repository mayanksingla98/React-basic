import {BUY_CAKE} from './cakeTypes'

export const BuyCake = (number = 2) => {
    return (
        {
            type: BUY_CAKE,
            payload: number
        }
    )
}

// export default BuyCake;