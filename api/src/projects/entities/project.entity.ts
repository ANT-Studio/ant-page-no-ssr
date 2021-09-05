import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    logo: string;

    @Column()
    description: string;

    @Column({nullable: true})
    website?: string;

    @Column({nullable: true})
    github?: string;
}


