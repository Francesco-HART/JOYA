//import nodemailer from "nodemailer";

const { SERIAL_PORT, SERIAL_BAUDRATE } = process.env;

const xbee = () => {
    return {
        api_mode: 1,
        serial_port: SERIAL_PORT,
        baud_rate: Number(SERIAL_BAUDRATE)
    }
};

export { xbee };
