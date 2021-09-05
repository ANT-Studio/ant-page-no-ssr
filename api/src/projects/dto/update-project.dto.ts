import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { IsNotEmpty, IsUrl, Length } from "class-validator";

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
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
