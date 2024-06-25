import { CustomerEntity } from "./customerEntity";
import { PetEntity } from "./petEntitiy";

export interface IAppointment {
    customer: CustomerEntity;
    pets: PetEntity[];
    date: Date;
    location: string;
    type: "SURGERY" | "CHECKUP"
    appointmentId: string
}



export class AppointmentEntity implements IAppointment {
    customer: CustomerEntity;
    pets: PetEntity[];
    date: Date;
    location: string;
    type: "SURGERY" | "CHECKUP"
    appointmentId: string

    constructor(appointment: IAppointment) {
        this.customer = appointment.customer;
        this.pets = appointment.pets;
        this.appointmentId = appointment.appointmentId;
        this.date = appointment.date;
        this.location = appointment.location;
        this.type = appointment.type;
    }

    static createAppointment (appointment: unknown) {
        return new AppointmentEntity(appointment as IAppointment)
    }
}