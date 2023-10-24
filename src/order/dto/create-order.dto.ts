import { IsNotEmpty } from "class-validator";

class CreateOrderDto {

    @IsNotEmpty()
    paymentMethod: String

    

}