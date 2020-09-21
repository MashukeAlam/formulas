const C = 299792458;

export const massenergy = async (mass) => {
    return mass * C * C;
}

export const acceleration = async (prev, end, time) => {
    return (end - prev)/time;
} 