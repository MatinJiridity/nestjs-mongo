import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Profile{
    @Prop()
    id:string

    @Prop()
    age:number

    @Prop([String])
    ffoods:string[]
}