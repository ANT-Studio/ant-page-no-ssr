import {IsNotEmpty, IsUrl, Length} from "class-validator";

export class CreateProjectDto {
    @Length(1, 50)
    name: string;

    @IsNotEmpty()
    logo: string;

    @Length(1, 200)
    description: string;

    @IsUrl()
    website?: string;

    @IsUrl()
    github?: string;
}
